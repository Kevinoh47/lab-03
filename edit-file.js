'use strict';

// let editFile = module.exports = {};

const fs = require('fs');

let file = './files/';
file += process.argv.slice(2);

console.log(file);

// read initial file
fs.readFile( file, (err,data) => {
  if ( err ) { throw (err);  }

  let actualContents  = data.toString().trim();
  console.log(actualContents);

  // Now write over the input file with a random number
  fs.writeFile(file, Math.random() * 100, (err) => {
    if (err) {throw (err);}

    // Read the file again. By embedding this we prevent async behavior in the console.log.
    fs.readFile( file, (err,data) => {
      if ( err ) { throw (err);  }
      let updatedContents = data.toString().trim();
      console.log(updatedContents);
    });
  });
});








