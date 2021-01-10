const db = require('../db.js');
const bcrypt = require('bcryptjs');
const { success, error, jwtToken} = require('../Helpers');
const User = require('../user/User');

module.exports.register = async (r,cb) =>{
    cb.callbackWaitsForEmptyEventLoop = false;
    try {
        await db();
        const res = await register(JSON.parse(r.body));
        return success(res);
    } catch (err) {
        return error(err);
    }
}

module.exports.login = async (r,cb) =>{
    cb.callbackWaitsForEmptyEventLoop = false;
    try {
        await db();
        const res = await login(JSON.parse(r.body));
        return success(res);
    } catch (err) {
        return error(err);
    }
}


const  login = async (data) => {
    const user = await User.findOne({ name: data.name })
    if(!user){
        return error({message:"Usuario o contraseña incorrecto"})
    }
    const checkPass = await bcrypt.compare(data.password, user.password)
    if(!checkPass){
       return error({message:"Usuario o contraseña incorrecto"})
      }
    
    return {auth: true, token: jwtToken({id:user._id,name:user.name})};
  }

const register = async (data)=>{
    //VERIFICAMOS SI EL USUARIO YA EXISTE 
    //SI EXTESTE ENVIAMOS UN MENSAJE DE ERROR, SINO CONTINUAMOS CON EL REGISTRO

    const user = await User.findOne({ name: data.name })
    if(user){
      return error({message:"El usuario ya existe"})
    }
    //SE ENCRIPTA A CONTRASEÑA
    data.password = bcrypt.hashSync(data.password, 8)
    const newUser = await User.create(data)

    //RETORANAMOS EL TOKEN TOKEN CON EL ID
    return {auth: true, token: jwtToken({id:newUser._id,name:newUser.name})}
  }
