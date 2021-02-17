const db = require('../db.js');
const { success, error} = require('../Helpers.js');
const {AllDataUser} = require('./UserQuery')
const {verify} = require('../auth/VerifyToken')


module.exports.dataUser = async (r,cb) =>{
  const token = JSON.parse(verify(r.headers.Authorization).body)
  cb.callbackWaitsForEmptyEventLoop = false;
  try {
      await db();
      const res = await AllDataUser(token.id);
      return  {
         statusCode: 200,
         headers: {
             "Access-Control-Allow-Headers" : "Content-Type",
             "Access-Control-Allow-Origin": "*", // Allow from anywhere 
             "Access-Control-Allow-Methods": "POST" // Allow only GET request 
         },
         body: JSON.stringify(res)
     }
  } catch (err){
      return {
         statusCode: 500,
         headers: {
         'Access-Control-Allow-Origin': '*'
         }
      }

  } 


}