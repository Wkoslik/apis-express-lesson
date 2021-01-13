//how to have hidden secret variables
//how to set up get around these secret variables?
//environmental variables are global variables that need to be hidden from the front end --> .env files
    //.env is in the parent folder.
        
//import npm modules
const express = require('express');
const axios = require('axios');
require('dotenv').config();//the way this works is this line let's the app know they need to go to the env file and get something.

//initialize our express server
const app = express();

//stub out a home route that returns hello world
app.get('/', (req, res) => {
    //any calls are the exact same as RESTful/CRUD. we are either getting or sending information
        //currently making a call to get info from google
        axios.get(`http://www.omdbapi.com/?s=star+wars&apikey=${process.env.OMDB_API_KEY}`) //request
            .then(response =>{ //once the request is made THEN you do somethign with it
                res.send(response.data);
            })
})

//call app dot list to start up a server
app.listen(3000, () => console.log('We up and runnin!'))