const mongoose = require('mongoose');
const { stringify } = require('uuid');

const TableSchema = new mongoose.Schema({

    userId:String,
    userName:String,
    table:String,
    score:Number,
    createAt:Date,
    updatedAt:Date
})

mongoose.model('Table', TableSchema);

module.exports = mongoose.model('Table');