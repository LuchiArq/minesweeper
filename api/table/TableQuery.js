const { success, error} = require('../Helpers.js');
const Table = require('./Table.js');


module.exports.getScores  =  async (id) =>{
    const Facil = await Table.find({userId:id, difficulty:"Facil",state:"win"}).select('score difficulty').sort({score:'asc'}).limit(1)
    const Medio = await Table.find({userId:id, difficulty:"Medio",state:"win"}).select('score difficulty').sort({score:'asc'}).limit(1)
    const Dificil = await Table.find({userId:id, difficulty:"Dificil",state:"win"}).select('score difficulty').sort({score:'asc'}).limit(1)

    return {Facil,Medio,Dificil}
}

module.exports.update = async (body) =>{
    const table = await Table.findByIdAndUpdate(body.id,{
        game: body.game,
        score:body.score,
        updatedAt : new Date(),
        flag:body.flag,
    },{new: true})
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
    const tables = await Table.find({userId:id,state:"saved"}).select('-userId').sort({createAt:'desc'}).limit(4)
    if(!tables.length){
        return error({message:"No posee tablas guardadas"})
    }
    return tables
}

module.exports.deleteGame = async (id,userId) =>{
    
   const game = await Table.findOneAndDelete({_id:id , userId:userId})

    return {message:"Tabla Eliminada",game}
}
