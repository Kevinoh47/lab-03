'use strict';

const fileReader = require('./lib/reader.js');

const files = process.argv.slice(2).map((file) => `./files/${file}`);

if( ! (files instanceof Array && files.length) ) {
  console.log(files);
  throw new Error('Invalid Args');
}

fileReader.readAll(files, (err,data) => {
  if ( err ) { throw err; }
  console.log('From Callback:', data);
});
