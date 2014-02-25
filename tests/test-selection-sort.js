'use strict';
var assert = require('assert'),
    Sorting = require('../src/2-sorting/sorting');


describe("Sorting with", function () {

    describe("SelectionSort", function () {

        var sorting, list;

        beforeEach(function () {
            list = [4, 3, 2, 1];
            sorting = new Sorting(list);
        });

        it("should get the index of the min value", function () {
            assert.strictEqual(sorting.indexOfMin([1]), 0);
            assert.strictEqual(sorting.indexOfMin([5,0,1]), 1);
            assert.strictEqual(sorting.indexOfMin([5,5,2,10,0]), 4);
        });

        it("should exchange elements", function () {
            assert.deepEqual(sorting.swapElements(list,1,2), [4,2,3,1]);
        });

        it("should sort", function () {
            assert.deepEqual(sorting.list, list);
            assert.deepEqual(sorting.selectionSort(), [1,2,3,4]);
        });
    });

    describe("InsertionSort", function () {
        var sorting, list;

        beforeEach(function () {
            list = [4, 3, 2, 1];
            sorting = new Sorting(list);
        });

        it("should sort", function () {
            assert.deepEqual(sorting.insertionSort(), [1, 2, 3, 4]);
        });
    });

    describe("ShellSort", function () {

        var sorting, list;

        beforeEach(function () {
            list = [4, 3, 2, 1];
            sorting = new Sorting(list);
        });

        it("should sort", function () {
            assert.deepEqual(sorting.shellSort(list), [1,2,3,4]);
        });
    });


    describe("Merge", function () {

        var sorting = new Sorting();

        it("should merge to lists already sorted", function () {
            var list = [1, 6, 9, 10, 2, 3, 7, 8],
                result = [1, 2, 3, 6, 7, 9, 10],
                N = list.length;


            assert.deepEqual(sorting.merge(list, Math.floor(N/2), N),
                             result);
        });

        it("should sort a list", function () {
            var list = [4,3,2,1],
                sorted = [1,2,3,4];
            sorting = new Sorting(list);

            assert.deepEqual(sorting.mergeSort(list), sorted);


        });

    });



});