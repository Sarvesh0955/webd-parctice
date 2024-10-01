const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        console.log("Connected to mongodb");
    })
    .catch((e) => {
        console.log("Error ",e);
    })

const movieSchema = new mongoose.Schema({
    name : String,
    year : Number,
    score : Number,
    rating : String
});

//creates collection
//creates a class of movie schema
const Movie = mongoose.model('Movie', movieSchema);
//we can instantiate the above class

Movie.insertMany([{name:"Daf",year:12,score:12,rating:"sfa"}]) //inserting data
//return promise not data
// let mv = Movie.find({})
//     .then((data) => {
//         console.log(data);
//     })

async function fun() {
    let mv = await Movie.find({});
    console.log(mv);
}

fun();

//direct update and detele do not return the object
//we have to use findone to return the object
