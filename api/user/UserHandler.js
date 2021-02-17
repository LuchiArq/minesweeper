const db = require('../db.js');
const { success, error} = require('../helpers.js');
const {AllDataUser} = require('./UserQuery')
const {verify} = require('../auth/VerifyToken')


module.exports.dataUser = async (r,cb) =>{
  const token = JSON.parse(verify(r.headers.Authorization).body)
  cb.callbackWaitsForEmptyEventLoop = false;
  try {
      await db();
      const res = await AllDataUser(token.id);
         return success(res)
  } catch (err) {
         return error(err)
      }
}