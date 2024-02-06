const mongoose = require('mongoose');

const planetSchema = require('../schema/planetSchema');


const planetModel = mongoose.model('Planet', planetSchema)

module.exports = planetModel