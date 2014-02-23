'use strict';
var assert = require('assert');
var FileLineReader = require('../utils/file-line-reader');

describe('Testing Utils', function () {

    describe('TestFileLineReader', function () {
        it('should read only the first line', function () {

            var SAMPLE_FILENAME = __dirname + '/samples/1.txt',
                flr;

            assert.throws(
                function () {
                    flr = new FileLineReader('inexisting_file.txt');
                }, "Fails if no file is found."
            );

            flr = new FileLineReader(SAMPLE_FILENAME);
            assert.equal(true, !!flr.hasNextLine());
            assert.equal("1", flr.nextLine());
            flr.close();
        });
    });

});