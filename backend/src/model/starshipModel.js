const mongoose = require('mongoose');

const starshipSchema = require('../schema/starshipSchema');


const starshipModel = mongoose.model('Starship', starshipSchema)

module.exports = starshipModel