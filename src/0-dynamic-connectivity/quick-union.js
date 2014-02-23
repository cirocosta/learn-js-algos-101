/* jshint -W097 */
/*global module:false*/
'use strict';

/**The DataStructure:
 * Each entry maps to its parent. That is, list[i] maps to the parent of
 * i.
 *
 * If to nodes have the same root, then they are connected (connected). To
 * connect components all we do is make the root of one the parent of
 * another (union).
 */


/**
 * QuickUnion algo implementation.
 * @param {'list' or 'number'} list_or_number a list or a number to
 * generate a new list.
 */
function QuickUnion(list_or_number) {
    if (typeof(list_or_number) === 'number') {
        this.list = this.generateRangeArray(list_or_number);
    } else {
        this.list = list_or_number;
    }
}


/**
 * Creates an array similar to python's range(N) function.
 * @param  {Number} N length
 * @return {Array}   the array created.
 */
QuickUnion.prototype.generateRangeArray = function (N) {
    var result = [], i = 0;
    for (i; i < N; i += 1) {
        result.push(i);
    }
    return result;
}

/**
 * Walks through the tree that the node is contained and finds its root.
 * @param  {Number} index node position
 * @return {Number}       root position
 */
QuickUnion.prototype.getRoot = function (index) {
    return this.list[index] === index? index : this.getRoot(this.list[index]);
};

/**
 * Checks if two elements are connected.
 */
QuickUnion.prototype.connected = function (p, q) {
    return this.getRoot(p) === this.getRoot(q) ? true : false;
};

/**
 * Merges the path of two elements.
 */
QuickUnion.prototype.union = function (p, q) {
    // this.list[i] maps I to the parent, list[I]. So, when we say
    // list[root(p)] = q, we are saying that the root of the P now has Q
    // as parent.
    this.list[this.getRoot(p)] = q;
};


module.exports = QuickUnion;