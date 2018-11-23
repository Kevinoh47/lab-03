'use strict';

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */
module.exports = exports = (files) => {
  console.log('INPUT FILES: ', files);
  return readAll([...files]);
};

/**
 * Read a single file, wrapped so that we can test
 * @param file
 * @returns {*}
 */
const readOne = (file) => {
  return readFile(file);
};

/**
 * Use Promise.all to wrap an array of file read requests
 * @param paths
 * @returns Promise.all([array of result strings])
 */
const readAll = (paths) => {

  let promises = [];
  paths.forEach( file => {
    promises.push(readOne(file));
  });

  return Promise.all(promises)
    .then(
      data => {
        console.log('DATA FROM ALL PROMISES: ', data);

        return data.reduce((a, buffer) => {
          a.push(buffer.toString().trim());
          return a;
        }, []);
      }
    );

};