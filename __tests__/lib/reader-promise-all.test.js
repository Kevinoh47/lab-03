'use strict';

jest.mock('fs');

const reader = require('../../lib/reader-promise-all.js');

describe('File Reader Module', () => {

  it('when given a bad file, returns an error', () => {
    let files = ['bad.txt']; // TODO see ../__mocks__/fs.js for source ...
    return reader(files)
      .then(good => {
      })
      .catch(err => expect(err).toBeDefined());
  });

  it('read a single, good file', () => {
    let files = ['file1.txt'];
    return reader(files)
      .then( data => {
        expect(data instanceof Array ).toBeTruthy();
        expect(data.length ).toBe(1);
      })
      .catch(err => expect(err).toBeNull());
  });

  it('reads multiple files', () => {
    let files = ['file1.txt', 'file2.txt', 'file3.txt', 'cheese.txt'];
    return reader(files)
      .then( data => {
        console.log('typeof data:', typeof data);
        console.log('data: ', data); 
        expect(data instanceof Array ).toBeTruthy();
        expect(data.length ).toBe(4);
      })
      .catch(err => expect(err).toBeNull());
  });

});