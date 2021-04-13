'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

const bcrypt= require('bcrypt');

//START_ASYNC -do not remove notes, place code between correct pair of notes.


var testFunction = bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  console.log(hash);
  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
  console.log(res);
  });
});
//END_ASYNC

//START_SYNC

var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
  
var result = bcrypt.compareSync(myPlaintextPassword, hash);

console.log(result);

//END_SYNC


app.listen(process.env.PORT || 3000, () => {});
