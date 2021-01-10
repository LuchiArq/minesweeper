const { success, error} = require('../Helpers.js');
const {verify} = require('../auth/VerifyToken')
const Table = require('./Table.js');
const db = require('../db.js');


// crear tabla 

module.exports.createTable = async (r, cb) => {
    console.log(r.body)
    cb.callbackWaitsForEmptyEventLoop = false;
    const token = r.headers.Authorization
    try {
        await db();
        const resToken = verify(token)
        const res = await create(resToken, JSON.parse(r.body));
        return success(res);
    } catch (err) {
        return error(err);
    }
  }

// cargar tabla guardada
module.exports.loadTable = async (r, cb) => {
    cb.callbackWaitsForEmptyEventLoop = false;
    const token = verify(r.headers.Authorization)
    try {
        await db();
        const res = await load(JSON.parse(r.body._id),token.id);
        return success(res);
    } catch (err) {
        return error(err);
    }
    
}
// mostrar todas las tablas guardadas de un usuario

module.exports.AllTables = async (r, cb) => {
    cb.callbackWaitsForEmptyEventLoop = false;
    const token = verify(r.headers.Authorization)
    
    try {
        await db();
        const res = await Tables(token.id);
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

    try {
        await db();
        const res = topScores()
        return success(res);
    } catch{
        return error(err);
    }
}

// CONSULTAS A LA BASE DE DATOS


const topScores = () =>{
    const scores = Table.find({}).sort({score: 'desc'}).limit(10)
    return scores
}

const load = async (id,userId) =>{
   const table = await Table.find({_id:id,userId:userId})
   if(table){
        return error({message:"No se puede cargar la tabla"})
    }
    return table
}

const update = async (body) =>{
    const table = await Table.findByIdAndUpdate(body.id,{
        table: body.table,
        score:body.score,
        updatedAt : new Date()
    })
    return table
}


const create = async (user,body)  => {
    const saveTable = await Table.create({
        userId:user.id,
        userName:user.name,
        table:body.table,
        score:body.score,
        createAt:new Date(),
        updatedAt:new Date()
    })
    return saveTable
}

const Tables = async (id) =>{
    const tables = await Table.find({userId:id})
    if(!tables.length){
        return error({message:"No posee tablas guardadas"})
    }
    return tables
}


