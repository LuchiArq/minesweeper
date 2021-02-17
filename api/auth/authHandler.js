const db = require('../db.js');
const { success, error} = require('../Helpers');
const {register,login} = require('./authQuery')

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
           return success(res)
    } catch (err) {
           return error(err)
        }
}




