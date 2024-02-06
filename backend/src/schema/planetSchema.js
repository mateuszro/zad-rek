const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
    name: {
        required: true,
        unique: true,
        minlength: 2,
        type: String,
    },
    rotation_period: {
        type: String
    },
    orbital_period: {
        type: String,
    },
    diameter: {
        type: String,
    },
    gravity: {
        type: String,
    },
    population: {
        type: String,
    },
    climate: {
        type: String,
    },
    terrain: {
        type: String,
    },
    surface_water: {
        type: String,
    },
    residents: {
        type: [String]
    },
    films: {
        type: [String]
    },
    url: {
        type: String,
    },
    created: {
        type: Date,
        default: Date.now
    },
    edited: {
        type: Date,
        default: Date.now
    },
},{ 
    collection: 'planets',
    timestamps: { createdAt: 'created', updatedAt: 'edited' }
})

module.exports = planetSchema

