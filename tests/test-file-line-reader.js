'use strict';

var assert = require('assert');
var FileLineReader = require('../utils/file-line-reader');

/**
 * Tests for the utils/file-line-reader.js script.
 * This intends also to represent its funcionality.
 */
module.exports = (function () {

    return {
        name: "TestFileLineReader",
        fn: function () {

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
        },
    }

})();