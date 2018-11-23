'use strict';

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */
module.exports = exports = (files) => {
  return readAll([...files]);
};

/**
 * Wraps the FS module, for testing purposes
 * @param file
 * @returns {*}
 */
const readOne = (file) => {
  return readFile(file);
};

/**
 * Reads in 3 files using promises, returning an array of contents
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 * @returns {*}
 */
const readAll = (paths) => {
  
  console.log('PROMISES readAll paths: ', paths);

  let contents = [];

  return readOne(paths[0])
    .then( data => {
      contents.push(data.toString().trim());
      return readOne(paths[1]);
    })
    .then( data => {
      contents.push(data.toString().trim());
      return readOne(paths[2]);
    })
    .then( data => {
      contents.push(data.toString().trim());
      return contents;
    })
    .catch( err => {throw err;} );
};