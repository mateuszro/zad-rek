const mongoose = require('mongoose');

const peopleSchema = require('../schema/peopleSchema');


const peopleModel = mongoose.model('People', peopleSchema)



module.exports = peopleModel;