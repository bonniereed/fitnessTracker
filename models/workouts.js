//requiring nosql database
const mongoose = require('mongoose');
//creating Schema
const Schema = mongoose.Schema;
//new workouts schema data validation
const workoutsSchema = new Schema({
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: 'Please choose resistance or cardio:',
            },
            name: {
                type: String,
                trim: true,
                required: 'Please enter an exercise:',
            },
            duration: {
                type: Number,
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            },
        },
    ],
    day: {
        type: Date,
        default: Date.now,
    },
});
//new workouts model
const Workouts = mongoose.model('Workouts', workoutsSchema);
//exporting model
module.exports = Workouts;
