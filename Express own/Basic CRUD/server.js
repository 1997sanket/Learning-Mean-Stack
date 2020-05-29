const Joi = require('joi'); //Installing Joi to handle requests and validate it effectively 
const express = require('express'); //returns function
const app = express();  //returns object 


app.use(express.json()); //to read body of requests. Adding a piece of middleware.


//genres array
const genres = [
    { id: 1, name: 'horror' },
    { id: 2, name: "comedy" },
    { id: 3, name: "drama" },
    { id: 4, name: "cartoon" }
];




// All CRUD requests here

//Get all genres

app.get('/api/genres', (req, res) => {
    res.send(genres);
});





//Get specific genre

app.get('/api/genres/:name', (req, res) => {

    //Converting name to a lower case
    nameLower = req.params.name.toLocaleLowerCase();

    //Check whether it exists or not
    const genre = genres.find((c) => {
        if (c.name === nameLower) return c.name;

    })  //Function returns if found.

    if (!genre) {
        return res.status(404).send('No such genre found');
    } else {
        res.send(genre);
    }

});





//Post a new genre

app.post('/api/genres', (req, res) => {

    //Validating using JOI..

    const result = validateGenre(req.body);
    if (result.error) {
        return res.status(400).send(result.error.details[0].message);
    }

    //IF everything fine then add the new object to our genres array.
    const genre = {
        id: genres.length + 1,
        name: req.body.name
    };

    genres.push(genre);
    res.send(genre);

});





//Put (Edit a genre )

app.put('/api/genres/:name', (req, res) => {

    //Converting name to a lower case
    nameLower = req.params.name.toLocaleLowerCase();

    //Check whether it exists or not
    const genre = genres.find((c) => {
        if (c.name === nameLower) return c.name;

    })  //Function returns if found.

    if (!genre) {
        return res.status(404).send('No such genre found');
    }

    //Validating using JOI..

    const result = validateGenre(req.body);
    if (result.error) {
        return res.status(400).send(result.error.details[0].message);
    }

    //IF everything fine then udpdate the name property
    genre.name = req.body.name;

    //return updated course
    res.send(genre);
});





//Delete an object
app.delete('/api/genres/:name', (req, res) => {

    //Converting name to a lower case
    nameLower = req.params.name.toLocaleLowerCase();

    //Check whether it exists or not
    const genre = genres.find((c) => {
        if (c.name === nameLower) return c.name;

    })  //Function returns if found.

    if (!genre) {
        return res.status(404).send('No such genre found');
    }

    //Deleting 
    const index = genres.indexOf(nameLower);
    genres.splice(index, 1);

    //Return the deleted genre
    res.send(genre);



});




//Function to validate using JOI

function validateGenre(genreBody) {

    //Creating a schema to validate with the post object send by the client
    const genreSchema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(genreBody, genreSchema);
}










//Listening..
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening to port : ${port}`));