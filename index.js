'use strict';
// Read and report file contents using Promise.all

const fileReader = require('./lib/reader.js');
const fileReaderExtended = require('./lib/reader-callback-extended.js');
const fileReaderPromises = require('./lib/reader-promises.js');
const fileReaderPromiseAll = require('./lib/reader-promise-all.js');

// Obtain and assert input
const files = process.argv.slice(2).map((file) => `./files/${file}`);

if( ! (files instanceof Array && files.length) ) {
  console.log(files);
  throw new Error('Invalid Args');
}

console.log('');
console.log('TASK 1 files: ', files);
console.log('');

// Task 1
fileReader.readAll(files, (err,data) => {
  if ( err ) { throw err; }
  console.log('From Callback:', data);
});

console.log('');
console.log('TASK 2 files: ', files);
console.log('');

// Task 2: Use callbacks to read any number of files
fileReaderExtended.readAll(files, (err,data) => {
  if ( err ) { throw err; }
  console.log('From Callbacks Extended:', data);
});

console.log('');
console.log('TASK 3 files: ', files);
console.log('');

// Task 3: Use a chain of promises to read 3 files in order
fileReaderPromises(files)
  .then(contents => console.log('From Promises():', contents));

console.log('');
console.log('TASK 4 files: ', files);
// console.log('');

// Task 4: Use Promise.all to read any number of files with promises
fileReaderPromiseAll(files)
  .then(contents => console.log('From Promise.all():', contents));
