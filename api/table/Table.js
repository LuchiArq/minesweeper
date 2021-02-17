const mongoose = require('mongoose');

const TableSchema = new mongoose.Schema({
    userId:String,
    userName:String,
    game:String,
    flag:String,
    state:String,
    difficulty:String,
    score:Number,
    createAt:Date,
    updatedAt:Date
})
mongoose.model('Table', TableSchema);

module.exports = mongoose.model('Table');