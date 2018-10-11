'use strict';

/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */
let reader = module.exports = {};

const fs = require('fs');

/**
 * This wraps the fs module, primarily so that we can more easily write tests around it.
 * @param file
 * @param callback
 */
const readOne = (file, callback) => {
  fs.readFile( file, (err, data) => {
    if(err) { callback(err); }
    else { 
      callback(undefined, data); 
    }
  });
};

/**
 * Reads and returns the contents of 3 files
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 */
reader.readAll = (paths, callback) => {
  let contents = [];

  // Read File 1
  readOne(paths[0], (err, data) => {
    if (err) {
      callback(err);
    }
    else {
      console.log(`Read File 1 ${paths[0]}`);
      contents.push(data.toString().trim());
    }
    // Read File 2
    readOne(paths[1], (err, data) => {
      if (err) {
        callback(err);
      }
      else {
        console.log(`Read File 2 ${paths[1]}`);
        contents.push(data.toString().trim());
      }
      // Read File 3 and run the callback
      readOne(paths[2], (err, data) => {
        if (err) {
          callback(err);
        }
        else {
          console.log(`Read File 3 ${paths[2]}`);
          contents.push(data.toString().trim());
        }
        callback(undefined, contents);
      });
    });
  });  
};
