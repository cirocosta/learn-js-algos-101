'use strict';

var assert = require('assert');
var QuickUnion = require('../0-dynamic-connectivity/quick-union');

module.exports = (function () {
    return {
        name: "TestQuickUnion",
        fn: function () {

            (function () {
                var list = [0, 9, 6, 5, 4, 2, 6, 1, 0, 5];
                var qu = new QuickUnion(list);

                assert.equal(qu.getRoot(0), 0);
                assert.equal(qu.getRoot(2), 6);
                assert.equal(qu.getRoot(5), 6);
                assert.equal(qu.connected(5, 8), false);
                assert.equal(qu.connected(3, 9), true);

                qu.union(5, 8);
                assert.equal(qu.connected(5, 8), true);
            })();

            (function () {
                var qu = new QuickUnion(10);
                assert.equal(qu.list.length, 10);

                qu.union(4,5);
                qu.union(5,6);

                assert.equal(qu.connected(4,6), true);

            })();

        }
    }
})();
