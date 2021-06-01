// Import helper classes
const express = require('express');

const fs = require('fs');
var d = new Date();

// Initializers
const app = express();

//configuring our express instance with body-parser settings for json 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// This is where we handle all the routes from
const routes = require('./routes/routes.js');
// /nodeservice2 is the url path to resolve in browser
app.use('/',routes)

// launch our server on port 80.
const server = app.listen(80, () => {
    console.log('listening on port 80....');
    console.log('App Started at :',d.toJSON().slice(0,19).replace('T',':'));
    
  });


  // docker tag avinash_service_one:latest 697462714443.dkr.ecr.us-east-1.amazonaws.com/avinash_service_one:latest
  // docker push 697462714443.dkr.ecr.us-east-1.amazonaws.com/avinash_ci_cd_samples:latest