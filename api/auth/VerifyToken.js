const jwt = require('jsonwebtoken');
const { success, error} = require('../Helpers');

module.exports.verify = (token) => {

  if(token) {
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    if(!decoded.id){
      return error({message:'JWT not authorized'});
    }
    return success(decoded)

  } else {
    return error({message:'JWT not authorized'});
  }
};
