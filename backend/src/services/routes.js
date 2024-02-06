const express = require("express");
const router = express.Router();

const peopleModel = require('../model/peopleModel');
const planetModel = require('../model/planetModel')
const starshipModel = require('../model/starshipModel');


/* PEOPLE */

/* Get all people */
router.get('/people', async (req, res, next) => {
    try {
        const allPeople = await peopleModel.find({});
        res.json(allPeople)
    }
    catch (error) {
        next(error);
    }
})

/* Get a specific people */
router.get('/people/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const people = await peopleModel.findById(id);

        if(!people) {
            const error = new Error('People does not exist');
            return next(error);
        }

        res.json(people)
    }
    catch (error) {
        next(error);
    }
})

/* Create a new people */
router.post('/people/add', async (req, res, next) => {
    const data = new peopleModel(req.body);
    try {
        const dataToSave = await data.save();
        if(dataToSave){
            res.status(200).json(dataToSave)
        }
    }
    catch (error) {
        next(error);
    }
})


/* Update a specific people */
router.put('/people/update/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true, runValidators: true };

        const result = await peopleModel.findByIdAndUpdate(
            id, updatedData, options
        )

        if(!result) {
            const error = new Error('People does not exist');
            return next(error);
        }

        res.json(result);
        
    }
    catch (error) {
        next(error);
    }
})

/* Delete a specific people */
router.delete('/people/delete/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await peopleModel.findByIdAndDelete(id)

        if(!result) {
            const error = new Error('People does not exist');
            return next(error);
        }
        res.json({
            message: `People ${result.name} has been deleted..`
        });
    }
    catch (error) {
        next(error);
    }
})

/* PLANETS */

/* Get all planets */
router.get('/planets', async (req, res, next) => {
    try {
        const allPlanets = await planetModel.find({});
        res.json(allPlanets)
    }
    catch (error) {
        next(error);
    }
})

/* Get a specific planet */
router.get('/planets/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const planet = await planetModel.findById(id);

        if(!planet) {
            const error = new Error('Planet does not exist');
            return next(error);
        }

        res.json(planet)
    }
    catch (error) {
        next(error);
    }
})

/* Create a new planet */
router.post('/planets/add', async (req, res, next) => {
    const data = new planetModel(req.body);
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        next(error);
    }
})


/* Update a specific planet */
router.put('/planets/update/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true, runValidators: true };

        const result = await planetModel.findByIdAndUpdate(
            id, updatedData, options
        )

        if(!result) {
            const error = new Error('Planet does not exist');
            return next(error);
        }

        res.json(result);
        
    }
    catch (error) {
        next(error);
    }
})

/* Delete a specific planet */
router.delete('/planets/delete/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await planetModel.findByIdAndDelete(id)

        if(!result) {
            const error = new Error('Planet does not exist');
            return next(error);
        }
        res.json({
            message: `Planet ${result.name} has been deleted..`
        });
    }
    catch (error) {
        next(error);
    }
})

/* STARSHIPS */

/* Get all starships */
router.get('/starships', async (req, res, next) => {
    try {
        const allStarships = await starshipModel.find();
        res.json(allStarships)
    }
    catch (error) {
        next(error);
    }
})

/* Get a specific starship */
router.get('/starships/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const starship = await starshipModel.findById(id);

        if(!starship) {
            const error = new Error('Starship does not exist');
            return next(error);
        }

        res.json(starship)
    }
    catch (error) {
        next(error);
    }
})

/* Create a new starship */
router.post('/starships/add', async (req, res, next) => {
    const data = new starshipModel(req.body);
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        next(error);
    }
})


/* Update a specific starship */
router.put('/starships/update/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true, runValidators: true };

        const result = await starshipModel.findByIdAndUpdate(
            id, updatedData, options
        )

        if(!result) {
            const error = new Error('Starship does not exist');
            return next(error);
        }

        res.json(result);
        
    }
    catch (error) {
        next(error);
    }
})

/* Delete a specific starship */
router.delete('/starships/delete/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await starshipModel.findByIdAndDelete(id)

        if(!result) {
            const error = new Error('Starship does not exist');
            return next(error);
        }
        res.json({
            message: `Starship ${result.name} has been deleted..`
        });
    }
    catch (error) {
        next(error);
    }
})

module.exports = {router}