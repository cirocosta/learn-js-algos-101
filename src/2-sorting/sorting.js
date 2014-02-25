/* jshint -W097 */
/*global module:false, require:false*/

'use strict';

function Sorting(list) {
    this.list = list || [];
}

////////////////////
// HELPER METHODS //
////////////////////

Sorting.prototype.swapElements = function(list, p, q) {
    var key = list[p];
    list[p] = list[q];
    list[q] = key;

    return list;
};

Sorting.prototype.indexOfMin = function(list) {
    var iMin = 0,
        i,
        N = list.length;

    for (i = 0; i < N; i += 1) {
        if (list[i] < list[iMin]) {
            iMin = i;
        }
    }

    return iMin;
};

/////////////////////////
// ALGO IMPLEMENTATION //
/////////////////////////

/**
 * Iterate over the array and, in every iteration, select the min value
 * from the array and then swap it with the first place of the array
 * given a counter that will indicates what is the first.
 */
Sorting.prototype.selectionSort = function (lista) {

    var i,
        list = lista || this.list,
        N = list.length;

    for (i = 0; i < N; i += 1) {
        var min = i;
        for (var j = i + 1; j <  N; j += 1) {
            if (list[j] < list[min]) {
                min = j;
            }
        }
        list = this.swapElements(list, i, min);
    }
    return list;
};


/**
 * Its main ideia is: as we are in the index I, everything to its left
 * is already sorted and everything to its right we haven't seen yet.
 * We, then, move one to the right and then put this item that we just
 * saw in the corrent position to the left.
 */
Sorting.prototype.insertionSort = function(lista) {

    // INVARIANTS:
    // - Entries to the left of I (including I) are in ascending order.
    // - Entries to the right of I have not yet been seen.
    //
    // ANALYSIS
    // - its perf. dependes on the initial state of the array.
    //      - best case: n-1
    //      - worst case: n^2

    var i, j,
        list = lista || this.list,
        N = list.length;

    for (i = 1; i < N; i += 1) {
        j = i;

        while (list[j-1] > list[j]) {
            list = this.swapElements(list, j-1, j);
            j--;
        }
    }

    return list;
};

Sorting.prototype.shellSOrt = function () {

};


/**
 * Merges a[lo ... mid] (sorted) with a[mid+1 ... hi](sorted).
 * @return {list}      the sorted array.
 */
Sorting.prototype.merge = function(a, lo, mid, hi) {

    // not running as it should.

    var i = lo, j = mid + 1, aux = [], k;

    for (k = lo; k < hi; k++) {
        aux[k] = a[k];
    }

    for(k = lo; k < hi; k++) {
        if (i > mid) {          // exausted the left side
            a[k] = aux[j++];
        } else if (j > hi) {    // exausted the right side
            a[k] = aux[i++];
        } else if (aux[j] < aux[i]) { // right key is less than left
            a[k] = aux[j++];
        } else {
            a[k] = aux[i++];
        }
    }

    return a;
};

Sorting.prototype.mergeSort = function (a) {

};

Sorting.prototype.quickSort = function (a) {

};

module.exports = Sorting;