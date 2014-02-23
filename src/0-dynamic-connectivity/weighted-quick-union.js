/* jshint -W097 */
/*global module:false, require:false*/
'use strict';

/**
 * It has a similar approach to the QuickUnion algorithm but, in this
 * case, we keep track of the size of the trees so that we ensure that
 * the smaller tree goes bellow. The difference is that we are going to
 * have an extra array to count the number of objects in the three
 * rooted at I. Find keeps equal. Union has a little change:
 *
 * Link root of the smaller tree to the root of larger tree, then update
 * the sz (size) array.
  */

var QuickUnion = require('./quick-union');

function generateRangeArray(N) {
    var result = [], i = 0;
    for (i; i < N; i += 1) {
        result.push(i);
    }
    return result;
}

function WeightedQuickUnion(list_or_number) {
    if (typeof(list_or_number) === 'number') {
        this.list = generateRangeArray(list_or_number);
    } else {
        this.list = list_or_number;
    }
    this.sz = [];
}

WeightedQuickUnion.prototype = new QuickUnion();

WeightedQuickUnion.prototype.union = function (p, q) {
    var i = this.getRoot(p),
        j = this.getRoot(q);

    if (i === j) {
        // they are already connected. Just return
        return;
    }

    // verify if the size of the tree rooted at I is smaller than then
    // tree rooted at J. If that verifies, then we put the smaller
    // (rooted at i) below. Else, the inverse.

    if (this.sz[i] < this.sz[j]) {
        this.list[i] = j;
        this.sz[j] += this.sz[i];
    } else {
        this.list[j] = i;
        this.sz[i] += this.sz[j];
    }
};

module.exports = WeightedQuickUnion;