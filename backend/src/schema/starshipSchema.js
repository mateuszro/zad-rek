const mongoose = require('mongoose');

// CZY TWORZY TE DEFAULTY

const starshipSchema = new mongoose.Schema({
    name: {
        required: true,
        unique: true,
        type: String
    },
    model: {
        type: String
    },
    starship_class: {
        type: String
    },
    manufacturer: {
        type: String
    },
    cost_in_credits: {
        type: String
    },
    length: {
        type: String
    },
    crew: {
        type: String
    },
    passengers: {
        type: String
    },
    max_atmosphering_speed: {
        type: String
    },
    hyperdrive_rating: {
        type: String
    },
    MGLT: {
        type: String
    },
    cargo_capacity: {
        type: String
    },
    consumables: {
        type: String
    },
    films: {
        type: [String]
    },
    pilots: {
        type: [String]
    },
    url: {
        type: String,
        default: ''
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
    collection: 'starships',
    timestamps: { createdAt: 'created', updatedAt: 'edited' }
})

module.exports = starshipSchema

