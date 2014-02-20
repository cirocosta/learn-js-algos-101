'use strict';

var fs = require("fs"),
    sys = require("sys");

/**
 * A wrapper for managing reading files. Heavily inspired from
 * http://blog.jaeckel.com/2010/03/i-tried-to-find-example-on-using-node.html
 * @param {String} filename   relative path to the file.
 * @param {Number} bufferSize (optional) bufferSize the buffer size.
 */
module.exports = function (filename, bufferSize) {
    /////////////
    // PRIVATE //
    /////////////

    bufferSize = bufferSize || 8192;

    var currentPositionInFile = 0,
        buffer = "",
        fd = fs.openSync(filename, "r");

    var fillBuffer = function (position) {
        var res = fs.readSync(fd, bufferSize, position, "ascii");

        buffer += res[0];
        if (res[1] === 0) {
            return -1;
        }
        return position + res[1];
    };

    currentPositionInFile = fillBuffer(0);

    ////////////
    // PUBLIC //
    ////////////

    this.FileLineReaderException = function (message) {
        this.message = message;
        this.name = "FileLineReaderException";
    };

    /**
     * Checks if it is possible to reach another line.
     * @return {Boolean} true if it is possible. false if not.
     */
    this.hasNextLine = function () {
        while (buffer.indexOf("\n") === -1) {
            currentPositionInFile = fillBuffer(currentPositionInFile);
            if (currentPositionInFile === -1) {
                return false;
            }
        }

        if (buffer.indexOf("\n") > -1) {
            return true;
        }
        return false;
    };

    /**
     * Reads the next line in the buffer.
     * @return {String} the next line.
     */
    this.nextLine = function () {
        var lineEnd = buffer.indexOf("\n"),
            result = buffer.substring(0, lineEnd);

        buffer = buffer.substring(result.length + 1, buffer.length);
        return result;
    };

    /**
     * Closes the connection with the file.
     * @param  {Function} cb callback function. It only takes an error
     *                       arg.
     * @see http://nodejs.org/api/fs.html#fs_fs_close_fd_callback
     */
    this.close = function (cb) {
        fs.close(fd, cb);
    };

    return this;
};