const { success, error} = require('../Helpers.js');
const Table = require('./Table.js');


module.exports.getScores  =  async (id) =>{

    const Facil = await Table.find({userId:id, difficulty:"Facil",state:"win"}).select('score difficulty').sort({score:'asc'}).limit(1)
    const Medio = await Table.find({userId:id, difficulty:"Medio",state:"win"}).select('score difficulty').sort({score:'asc'}).limit(1)
    const Dificil = await Table.find({userId:id, difficulty:"Dificil",state:"win"}).select('score difficulty').sort({score:'asc'}).limit(1)

    return {Facil,Medio,Dificil}
}

module.exports.load = async (id,userId) =>{
   const table = await Table.find({_id:id,userId:userId})
   if(!table){
        return error({message:"No se puede cargar la tabla"})
    }
    return table
}

module.exports.update = async (body) =>{
    console.log("UPDATE TABLA ",body)
    const table = await Table.findByIdAndUpdate(body.id,{
        game: body.game,
        score:body.score,
        updatedAt : new Date(),
        flag:body.flag,
    },{new: true})
    console.log("ESTA ES LA TABLa ",table)
    return table
}


module.exports.create = async (user,body)  => {
    const saveTable = await Table.create({
        userId:user.id,
        userName:user.name,
        game:body.game,
        flag:body.flag,
        difficulty:body.difficulty,
        state:body.state,
        score:body.score,
        createAt:new Date(),
        updatedAt:new Date()
    })
    return saveTable
}

module.exports.getTablesSaved = async (id) =>{
    const tables = await Table.find({userId:id,state:"saved"}).sort({createAt:'desc'}).limit(4)
    if(!tables.length){
        return error({message:"No posee tablas guardadas"})
    }
    return tables
}