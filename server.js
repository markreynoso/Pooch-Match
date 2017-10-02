'use strict';


const EXPRESS = require('express');
const PARSE = require('body-parser');
const PG = require('pg');
const PORT = process.env.PORT || 5000;
const APP = EXPRESS();
const CONSTRING = process.env.DATABASE_URL || 'postgres://localhost:5432/';
const REQUESTPROXY = require('express-request-proxy');
const CLIENT = new PG.Client(CONSTRING);
CLIENT.connect();
APP.use(EXPRESS.static('./public'));
APP.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
