'use strict';

jest.mock('fs');

const reader = require('../../lib/reader-promises.js');

describe('File Reader Module', () => {

  it('when given a bad file, returns an error', () => {
    let files = ['bad.txt'];
    return reader(files)
      .then(good => {
      })
      .catch(err => expect(err).toBeDefined());
  });

  it('reads 3 files', () => {
    let files = ['file1.txt', 'file2.txt', 'file3.txt'];
    return reader(files)
      .then( data => {
        expect(data instanceof Array ).toBeTruthy();
        expect(data.length ).toBe(3);
      })
      .catch(err => expect(err).toBeNull());
  });

});
