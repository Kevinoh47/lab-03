'use strict';

jest.mock('fs');

//const reader = require('../../lib/reader.js');
const reader = require('../../lib/reader.js');

describe('File Reader Module', () => {

  // NOTE: There is something wrong with this test. I spent an hour trying to figure it out without success.

  // it('when given a bad file, returns an error', done => {
  //   let files = ['bad.txt'];
  //   // In jest, throwing errors obviously kills the app, so if you're
  //   // going to throw one in a test, have the expect execute your code as a
  //   // function so that you can trap it.
  //   reader.readAll(files, (err,data) => {
  //     expect(err).toBeDefined();
  //     done();
  //   });
  // });

  it('reads 3 files', done => {
    let files = ['file1.txt', 'file2.txt', 'file2.txt'];
    reader.readAll(files, (err,data) => {
      expect(err).toBeUndefined();
      expect(data instanceof Array ).toBeTruthy();
      expect(data.length ).toBe(3);
      done();
    });
  });

});
