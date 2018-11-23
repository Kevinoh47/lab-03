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

  console.log('paths: ', paths);
  paths.map((path, index) => readOne(path, (err, data) => {
    if (err) {callback(err);}
    else {
      contents.push(data.toString().trim());
      console.log('inside map:', contents);
    }
  }));
  // console.log("mapped contents", mappedContents);
  // console.log("final contents", contents);
  callback(undefined,  contents);
  
};
