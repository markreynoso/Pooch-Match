'use strict';


const EXPRESS = require('express');
const PARSE = require('body-parser');
const PG = require('pg');
const FS = require('fs');
const PORT = process.env.PORT || 3000;
const APP = EXPRESS();

const CONSTRING = process.env.DATABASE_URL || 'postgres://localhost:5432/breeds';
// const CONSTRING = process.env.DATABASE_URL || 'postgres://postgres:54321@localhost:5432/breeds';
const REQUESTPROXY = require('express-request-proxy');
const CLIENT = new PG.Client(CONSTRING);
CLIENT.connect();
APP.use(EXPRESS.static('./public'));
APP.use(PARSE.json());
APP.use(PARSE.urlencoded({extended: true}));
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
      url VARCHAR(255),
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
      CLIENT.query(`INSERT INTO dogs(dogapi, name, size, url, grooming, activityLevel, kids, drools, trainable, needsYard, allergies, sheds) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) ON CONFLICT (dogapi) DO NOTHING`, [ele.dogapi, ele.name, ele.size, ele.url, ele.grooming, ele.activityLevel, ele.kids, ele.drools, ele.trainable, ele.needsYard, ele.allergies, ele.sheds])
        .catch(function(err){
          console.error(ele.name + ' broken\n' + err);
        });
    })
  })
}
makeTable();

function queryMaker(data){
  let query1, query2, query3, query4, query5, query6, query7, query8, query9, query10, query11, query12, query13;

  if(data.allergy === 'true'){
    query1 = `allergies=true`
  }else{
    query1 = `(allergies=true OR allergies=false)`
  }

  if(data.kids === 'true'){
    query2 = query1 + ` AND kids=true`
  }else{
    query2 = query1;
  }
  if(data.energy === '1'){
    query3 = query2 + ` AND activityLevel BETWEEN 1 AND 3`
  }else if(data.energy === '2'){
    query3 = query2 + ` AND activityLevel BETWEEN 4 AND 6`
  }else{
    query3 = query2 + ` AND activityLevel BETWEEN 7 AND 10`
  }

  if(data.size1 === 'false'){
    query4 = query3 + ` AND NOT size='tiny'`
  }else{
    query4 = query3;
  }
  if(data.size2 === 'false'){
    query5 = query4 + ` AND NOT size='small'`
  }else{
    query5 = query4;
  }
  if(data.size3 === 'false'){
    query6 = query5 + ` AND NOT size='medium'`
  }else{
    query6 = query5;
  }
  if(data.size4 === 'false'){
    query7 = query6 + ` AND NOT size='large'`
  }else{
    query7 = query6;
  }
  if(data.size5 === 'false'){
    query8 = query7 + ` AND NOT size='giant'`
  }else{
    query8 = query7;
  }

  if(data.trainable === '1'){
    query9 = query8 + ` AND trainable BETWEEN 8 AND 10`
  }else if(data.trainable === '2'){
    query9 = query8 + ` AND trainable BETWEEN 6 AND 10`
  }else if(data.trainable === '3'){
    query9 = query8 + ` AND trainable BETWEEN 3 AND 10`
  }else{
    query9 = query8;
  }

  if(data.grooming === '1'){
    query10 = query9 + ` AND grooming BETWEEN 1 AND 4`
  }else if(data.grooming === '2'){
    query10 = query9 + ` AND grooming BETWEEN 1 AND 7`
  }else{
    query10 = query9;
  }

  if(data.sheds === 'true'){
    query11 = query10;
  }else{
    query11 = query10 + ` AND sheds=false`
  }

  if(data.yard === 'true'){
    query12 = query11;
  }else{
    query12 = query11 + ` AND needsYard=false`
  }

  if(data.drools === 'true'){
    query13 = query12 + ` AND drools=false`
  }else{
    query13 = query12;
  }
  console.log(query13);
  return query13;
}

APP.get('/dbpull', function(request, response){

  CLIENT.query(`SELECT name, url FROM dogs WHERE ${queryMaker(request.query)}`)
  .then(result => {
    response.send(result.rows);
  })
  .catch(console.error)
})

APP.get('/find/:breed/:zip', function(request, response){
  (REQUESTPROXY({
    url: `http://api.petfinder.com/pet.find`,
    query: {key: `f6a8dafe70de07dbc2e288483f909123`, breed: `${request.params.breed}`, location: `${request.params.zip}`, format: `json`}
  }))(request, response, console.error);
})

APP.get('/results', function(request, response){
  response.sendFile('index.html', {root: './public'})
})

APP.get('/about', function(request, response){
  response.sendFile('index.html', {root: './public'})
})

APP.get('*', (request, response) => {
  response.sendFile('404.html', {root: './public'})
})

APP.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
