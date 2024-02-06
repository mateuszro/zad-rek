const mongoose = require('mongoose');

const peopleSchema = new mongoose.Schema({
    name: {
        required: true,
        minlength: 2,
        unique: true,
        type: String
    },
    birth_year: {
        type: String
    },
    eye_color: {
        type: String
    },
    gender: {
        type: String
    },
    height: {
        type: String
    },
    mass: {
        type: String
    },
    skin_color: {
        type: String
    },
    homeworld: {
        type: String
    },
    films: {
        type: [String]
    },
    species: {
        type: [String]
    },
    starships: {
        type: [String]
    },
    vehicles: {
        type: [String]
    },
    url: {
        type: String
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
    collection: 'people',
    timestamps: { createdAt: 'created', updatedAt: 'edited' }
})

module.exports = peopleSchema

