'use strict';

var assert = require('assert');
var FileLineReader = require('../utils/file-line-reader');
var QuickFind = require('../0-dynamic-connectivity/union-find');


module.exports = (function () {

    return {
        name: "TestUnionFind",
        fn: function () {

            (function () {

                var qf = new QuickFind(10);
                assert.equal(10, qf.list.length);

                qf.union(4,3);
                assert.equal(3, qf.list[3]);
                assert.equal(3, qf.list[4]);

                qf.union(3,8);
                assert.equal(8, qf.list[3]);
                assert.equal(8, qf.list[4]);
                assert.equal(8, qf.list[8]);

                qf.union(2,8);
                assert.equal(8, qf.list[3]);
                assert.equal(8, qf.list[4]);
                assert.equal(8, qf.list[8]);
                assert.equal(8, qf.list[2]);

                assert.equal(true, qf.connected(4,3));
                assert.equal(true, qf.connected(3,8));
                assert.equal(true, qf.connected(2,8));
                assert.equal(false, qf.connected(2,9));

                console.log("... Test With Generation -- ok");
            })();


            (function () {

                var flr = new FileLineReader(__dirname + '/samples/2.txt');

                if (flr.hasNextLine()) {
                    var N = flr.nextLine();
                    var qf = new QuickFind(N);

                    assert.equal(N, qf.list.length);

                    while (flr.hasNextLine()) {
                        var values = flr.nextLine().split(" ");
                        // console.log(values);
                        if (!qf.connected(values[0], values[1])) {
                            qf.union(values[0], values[1]);
                        }
                        // assert.equal(true, qf.connected(values[0], values[1]));
                    }
                }
                flr.close();
            })();

        },
    }

})();