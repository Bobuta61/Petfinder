// import the pets array from data.js
const pets = require("./data");

// init express app
const express = require("express");
const app = express();

const PORT = 8080;

// GET - / - returns homepage
app.get("/", (req, res) => {

    // serve up the public folder as static index.html file
    res.send("Welcome to the server");

});


// // hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// // get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response
    res.send(pets);

});

// // get pet by owner with query string
// app.get('/api/v1/pets/owner', (req, res) => {
//     console.log(req);
//     const owner = req.query.owner;
    

    // get the owner from the request
    // res.send(owner);

// });
app.get('/api/v1/pets/owner', (req, res) => {
    const owner = req.query.owner;
    console.log(res);   

//     // find the pet in the pets array
    const pet = pets.find((pet) => pet.owner === owner);
    res.send(pet);

//     // send the pet as a response

});

// // get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    const name = req.params.name;
    // get the name from the request


    // find the pet in the pets array
    const pet = pets.find((pet) => pet.name === name);

    // send the pet as a response
    res.send(pet);

});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
});

module.exports = app;

// const express = require("express");
// const app = express();

// const PORT = 8090;

// // app.get("/hello", (req, res) => {
// //     res.send("Hello World!");
// // });

// // app.get("/hello/:name", (req, res) => {
// //     const name = req.params.name;
// //     res.send(`Hello ${name}`);
// // });

// // app.get('/hello-query', (req, res) => {
// //     const name = req.query.name;
// //     res.send(`Hello ${name}`);
// // });

// app.get('/', (req, res) => {
//     res.sendFile('I am the home route for this app');
// });

// // app.listen(PORT, () => {
// //     console.log(`Server is running on port ${PORT}`);
// // });

// // app.get("/api/v1/pets", (req, res) => {
// //     const pets = req.pets;
// //     res.send(`${pets}`);
// // });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// module.exports = app;