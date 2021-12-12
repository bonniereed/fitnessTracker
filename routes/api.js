//requiring dependencies
const router = require('express').Router();
const Workouts = require('../models/workouts.js');

//getting workouts and compiling all data

router.get('/workouts', (req, res) => {
    Workouts.aggregate([
        {
            $addFields: { totalDuration: { $sum: '$exercises.duration' } },
        },
    ])
        .then((dbWorkouts) => {
            res.json(dbWorkouts);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});
//update request for workout by id
router.put('/workouts/:id', (req, res) => {
    Workouts.findByIdAndUpdate(
        { _id: req.params.id },
        { $push: { exercises: req.body } }
    )
        .then((dbWorkouts) => {
            res.json(dbWorkouts);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});
//post request for workouts
router.post('/workouts', (req, res) => {
    Workouts.create(req)
        .then((dbWorkouts) => {
            res.json(dbWorkouts);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});
//get request for workout's total duration within 7 days in decending order
router.get('/workouts/range', (req, res) => {
    Workouts.aggregate([
        {
            $addFields: { totalDuration: { $sum: '$exercises.duration' } },
        },
    ])

        .sort({ day: -1 })
        .limit(7)
        .sort({ day: 1 })
        .then((dbWorkouts) => {
            res.json(dbWorkouts);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});
//exporting get put and post routes
module.exports = router;
