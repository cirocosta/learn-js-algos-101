/* jshint -W097 */
/*global module:false*/
'use strict';

/**
 * In this approach, P and Q are connected IFF they have the same ID
 * from the ID's list. The interpration that is given for the list is: X
 * is connected to id[X]. If ID[X] === X, then X is connected to itself.
 * If P is connected to Q, then Q is connected to P. If X connects to Y
 * and Y connects to Z, then X is connected to Z.
 */

function generateRangeList(N) {
    var result = [],
        i = 0;
    for (i; i < N; i += 1) {
        result.push(i);
    }
    return result;
}

/**
 * Constructs the Quickfind data structure.
 * @param {number or list} args a number or list. If a number is passed,
 * a list with that number of elements will be generated with a range
 * function.
 */
function QuickFind(args) {
    this.list = typeof(args) === 'number' ? generateRangeList(args) : args;
}

/**
 * Verifies if two nodes are connected.
 */
QuickFind.prototype.connected = function(p, q) {
    if (p == q) {
        return true;
    } else if (this.list[p] === this.list[q]) {
        return true;
    }
    return false;
};

/**
 * Connects to nodes.
 */
QuickFind.prototype.union = function(p, q) {
    var oldP = this.list[p];
    for (var i in this.list) {
        if (this.list[i] === oldP) {
            this.list[i] = this.list[q];
        }
    }
};



module.exports = QuickFind;