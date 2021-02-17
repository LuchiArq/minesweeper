const { success, error} = require('../Helpers.js');
const {verify} = require('../auth/VerifyToken')
const {getScores, load, update,create,getTablesSaved} = require('./TableQuery')
const db = require('../db.js');

// crear tabla 

module.exports.createTable = async (r, cb) => {
    cb.callbackWaitsForEmptyEventLoop = false;
    const token = JSON.parse(verify(r.headers.Authorization).body)
    const body = JSON.parse(r.body)

    try {
        await db();
        const res = await create(token, body);
        return success(res);
    } catch (err) {
        return error(err);
    }
  }

// cargar tabla guardada
module.exports.loadTable = async (r, cb) => {
    cb.callbackWaitsForEmptyEventLoop = false;
    const token = JSON.parse(verify(r.headers.Authorization).body)
    try {
        await db();
        const res = await load(r.pathParameters._id,token.id);
        return success(res);
    } catch (err) {
        return error(err);
    }
    
}
// mostrar todas las tablas guardadas de un usuario

module.exports.AllTables = async (r, cb) => {
    cb.callbackWaitsForEmptyEventLoop = false;

    const token = JSON.parse(verify(r.headers.Authorization).body)
    try {
        await db();
        const res = await getTablesSaved(token.id);
        return success(res);
    } catch (err) {
        return error(err);
    }
}

// actualizar tabla existente

module.exports.saveTable = async (r,cb) => {
    cb.callbackWaitsForEmptyEventLoop = false;
    try {
        await db();
        const res = await update(JSON.parse(r.body));
        return success(res);
    } catch (err) {
        return error(err);
    }
}

// obtener las 10 puntaciones mas altas

module.exports.scores = async (r,cb) =>{
    cb.callbackWaitsForEmptyEventLoop = false;    
  const token = JSON.parse(verify(r.headers.Authorization).body)
    try {
        await db();
        const res = await getScores(token.id)
        return success(res);
    } catch (err){
        return error(err);
    }
}



