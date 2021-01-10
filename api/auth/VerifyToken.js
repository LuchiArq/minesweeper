const jwt = require('jsonwebtoken');
const { success, error} = require('../Helpers');

module.exports.verify = (token) => {

  if(token) {
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    console.log("TOKEN DECODIFICADO " ,decoded)
    
    if(!decoded.id){
      return error({message:'JWT not authorized'});
    }
    return decoded

  } else {
    return error({message:'JWT not authorized'});
  }
};
