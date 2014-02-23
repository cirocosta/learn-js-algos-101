'use strict';
var assert = require('assert');


describe('Testing Dynamic Connectivity', function () {

    describe('Quick Find', function () {

        var QuickFind = require('../src/0-dynamic-connectivity/quick-find');

        it('should generate well from integer', function () {
            var qf = new QuickFind(10);
            assert.equal(qf.list.length, 10);
        });

        it('should generate well from list', function () {
            var list = [1, 2, 11, 4, 3, 6, 7, 2, 9, 10];
            var qf = new QuickFind(list);
            assert.equal(qf.list, list);
        });

        it('should know if two nodes are connected', function () {
            // 0 is connected to 0.
            // 1 is connected to 0.
            // 2 is connected to 0.
            var list = [0, 0, 0];
            var qf = new QuickFind(list);

            assert.equal(qf.connected(0, 0), true);
            assert.equal(qf.connected(0, 1), true);
            assert.equal(qf.connected(0, 2), true);
        });

        it('should connect two nodes', function () {
            var qf = new QuickFind(10);

            qf.union(0, 1);
            assert.equal(qf.connected(0, 1), true);

            qf.union(0, 2)
            assert.equal(qf.connected(0, 1), true);
            assert.equal(qf.connected(0, 2), true);
            assert.equal(qf.connected(1, 2), true);

            qf.union(3, 4);
            assert.equal(qf.connected(3, 4), true);

            qf.union(0, 3);
            assert.equal(qf.connected(0, 3), true);
        });

    });

    describe('Quick Union', function () {

        var QuickUnion = require('../src/0-dynamic-connectivity/quick-union')

        it('should generate from int', function () {
            var qu = new QuickUnion(20);
            assert.equal(qu.list.length, 20);
        });

        it('should generate from list', function () {
            var qu = new QuickUnion([1, 2, 3, 4, 5]);
            assert.equal(qu.list.length, 5);
        });

        it('should perform simple union', function () {
            var qu = new QuickUnion(10);
            assert.equal(qu.list.length, 10);

            qu.union(4,5);
            qu.union(5,6);

            assert.equal(qu.connected(4,6), true);
        });

        it('should iterate well over defined list', function () {
            var list = [0, 9, 6, 5, 4, 2, 6, 1, 0, 5];
            var qu = new QuickUnion(list);

            assert.equal(qu.getRoot(0), 0);
            assert.equal(qu.getRoot(2), 6);
            assert.equal(qu.getRoot(5), 6);
            assert.equal(qu.connected(5, 8), false);
            assert.equal(qu.connected(3, 9), true);

            qu.union(5, 8);
            assert.equal(qu.connected(5, 8), true);
        });
    });

    describe('Weighted Quick Union', function () {
        var WeightedQuickUnion = require(
            '../src/0-dynamic-connectivity/weighted-quick-union');

        it("should connect", function () {
            var wqu = new WeightedQuickUnion(10);

            assert.equal(wqu.list.length, 10);

            wqu.union(4,3);
            assert.equal(wqu.connected(4,3), true);
        });
    });

});