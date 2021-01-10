const { success, error} = require('../helpers.js');
const {verify} = require('../auth/VerifyToken')
const User = require('./User.js');
const db = require('../db.js');

module.exports.myProfile = async (r, cb) => {
    cb.callbackWaitsForEmptyEventLoop = false;
    const token = r.headers.Authorization
    try {
        await db();
        const resToken = verify(token)
        const res = await myProfile(resToken.id);
        return success(res);
    } catch (err) {
        return error(err);
    }
  }

  const  myProfile = async (id) => {
    const user = await User.findById(id)
    if(!user){
       return error({message:"Usuario o contraseña incorrecto"})
    }
      return user
  }