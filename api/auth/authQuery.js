const { success, error, jwtToken} = require('../Helpers');
const User = require('../user/User');
const {getScores,getTablesSaved} = require('../table/TableQuery')
const bcrypt = require('bcryptjs');

module.exports.login = async (data) => {
  
    const user = await User.findOne({ name: data.name })
    const tables = await getTablesSaved(user.id) 
    const records = await getScores(user.id)

  console.log("EL USUARIO ", user)

    if(!user){
        return error({message:"Usuario o contraseña incorrecto"})
    }
   
    const checkPass = await bcrypt.compare(data.password, user.password)
    if(!checkPass){
       return error({message:"Usuario o contraseña incorrecto"})
      }

    const resp={
      records:records || [],
      tables:tables,
      userName:user.name,
      token: jwtToken({id:user._id,name:user.name})
    }

    return resp
  }

  module.exports.register = async (data)=>{
    //VERIFICAMOS SI EL USUARIO YA EXISTE 
    //SI EXTESTE ENVIAMOS UN MENSAJE DE ERROR, SINO CONTINUAMOS CON EL REGISTRO

    const user = await User.findOne({ name: data.name })
    if(user){
      return error({message:"Usuario no disponible"})
    }
    //SE ENCRIPTA A CONTRASEÑA
    data.password = bcrypt.hashSync(data.password, 8)
    const newUser = await User.create(data)

    const resp={
      userName:newUser.name, 
      token: jwtToken({id:newUser._id,name:newUser.name})
    }

    //RETORANAMOS EL TOKEN TOKEN CON EL ID
    return resp
  }