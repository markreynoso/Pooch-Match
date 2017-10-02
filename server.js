'use strict';


const EXPRESS = require('express');
const PARSE = require('body-parser');
const PG = require('pg');
const PORT = process.env.PORT || 5000;
const APP = EXPRESS();
const CONSTRING = process.env.DATABASE_URL || 'postgres://localhost:5432/breeds';
const REQUESTPROXY = require('express-request-proxy');
const CLIENT = new PG.Client(CONSTRING);
CLIENT.connect();
APP.use(EXPRESS.static('./public'));

APP.get('/', function(request, response){
  response.sendFile('index.html', {root: './public'});
})

// APP.get('/match/', breedQuery);

// function breedQuery(request, resonse){
//   CLIENT.query(`SELECT 'breed' FROM 'breeds' WHERE ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`[request.allergy.])
// }
// function petRecommendation(request, response){
//
//   (requestProxy({
//     url: `http://api.petfinder.com/pet.find?key=f6a8dafe70de07dbc2e288483f909123${insert request params}`,
//     headers: {key: `f6a8dafe70de07dbc2e288483f909123`, breed: 'dog', location: 'zip'}
//   }))()(request, response)
// }

APP.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
