const User = require('./User.js');
const {getScores,getTablesSaved} = require('../table/TableQuery')
const {jwtToken} = require('../Helpers');


// funcion que devuelve todos los datos del usuario unicamente reciviendo el token.
module.exports.AllDataUser = async (id) => {
    const user = await User.findOne({ _id:id })
    const tables = await getTablesSaved(id) 
    const records = await getScores(id)
    
    const resp={
      records:records || [],
      tables:tables,
      userName:user.name,
      token: jwtToken({id:user._id,name:user.name})
    }
    return resp
  }