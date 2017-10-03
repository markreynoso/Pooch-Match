'use strict';


const EXPRESS = require('express');
const PARSE = require('body-parser');
const PG = require('pg');
const FS = require('fs');
const PORT = process.env.PORT || 3000;
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

function makeTable(request, response){
  CLIENT.query(`CREATE TABLE IF NOT EXISTS dogs (
      breed_id SERIAL PRIMARY KEY,
      dogapi VARCHAR(255) UNIQUE,
      name VARCHAR(255),
      size VARCHAR(255),
      fur VARCHAR(255),
      grooming INTEGER,
      activityLevel INTEGER,
      kids BOOLEAN,
      drools BOOLEAN,
      trainable INTEGER,
      needsYard BOOLEAN,
      allergies BOOLEAN,
      sheds BOOLEAN)`)
    .then(loadDogs)
    .catch(console.error);
}

function loadDogs(){
  FS.readFile('./public/data/breeds.json', (err, fd) => {
    JSON.parse(fd.toString()).forEach(ele => {
      CLIENT.query(`INSERT INTO dogs(dogapi, name, size, fur, grooming, activityLevel, kids, drools, trainable, needsYard, allergies, sheds) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) ON CONFLICT (dogapi) DO NOTHING`, [ele.dogapi, ele.name, ele.size, ele.fur, ele.grooming, ele.activityLevel, ele.kids, ele.drools, ele.trainable, ele.needsYard, ele.allergies, ele.sheds])
        .catch(function(err){
          console.error(ele.name + ' broken\n' + err);
        });
    })
  })
}
makeTable();

// CLIENT.query(`SELECT 'name' FROM 'breeds' WHERE ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`[request.allergy.])

// function petRecommendation(request, response){
//
//   (requestProxy({
//     url: `http://api.petfinder.com/pet.find?key=f6a8dafe70de07dbc2e288483f909123${insert request params}`,
//     headers: {key: `f6a8dafe70de07dbc2e288483f909123`, breed: 'dog', location: 'zip'}
//   }))()(request, response)
// }

APP.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
