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

function makeTable(request, response){
  CLIENT.query(`CREATE TABLE IF NOT EXISTS dogs (
      breed_id SERIAL PRIMARY KEY,
      dogapi,
      name,
      size,
      fur,
      grooming,
      activityLevel,
      kids,
      drools,
      trainable,
      needsYard,
      allergies,
      sheds);`)
  .then(loadDogs)
  .catch(console.error(err));
}

function loadDogs(){

  CLIENT.query(`INSERT INTO dogs(dogapi, name, size, fur, grooming, activityLevel, kids, drools, trainable, needsYard, allergies, sheds) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) ON CONFLICT DO NOTHING`, [])
}
JSON.parse(fd.toString()).forEach(ele => {
      client.query(
        'INSERT INTO authors(author, "authorUrl") VALUES($1, $2) ON CONFLICT DO NOTHING',
        [ele.author, ele.authorUrl]
      )

CLIENT.query(`SELECT 'name' FROM 'breeds' WHERE ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`[request.allergy.])

// function petRecommendation(request, response){
//
//   (requestProxy({
//     url: `http://api.petfinder.com/pet.find?key=f6a8dafe70de07dbc2e288483f909123${insert request params}`,
//     headers: {key: `f6a8dafe70de07dbc2e288483f909123`, breed: 'dog', location: 'zip'}
//   }))()(request, response)
// }

APP.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
