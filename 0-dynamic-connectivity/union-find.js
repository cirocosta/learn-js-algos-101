'use strict';

//////////////////////////
// UNION : O(N)         //
// CONNECTED: O(1)      //
// FULL-IMPLEM: O(N^2)  //
//////////////////////////

/**
 * [QuickFind description]
 * @param {Array of ints} list a list containing the nodes index.
 */
function QuickFind(N) {
    var i;

    this.N = N;
    this.list = [];
    for (i = 0; i < N; i += 1) {
        this.list.push(i);
    }
}

/**
 * Connects P and Q. For doing that we need to change all the entries
 * whose id equals id[p] to id[q] as, to be connected, id[p] === id[q].
 * @param  {Number} p node
 * @param  {Number} q node
 */
QuickFind.prototype.union = function (p, q) {
    var i;
    for (i = 0; i < this.N; i += 1) {
        if (this.list[i] === p) {
            this.list[i] = q;
        }
    }
    console.log(this.list);
};

/**
 * Checks if P and Q are in the same path somehow.
 * @param  {Number} p a node.
 * @param  {Number} q a node.
 * @return {Boolean}   if they are connected or not.
 */
QuickFind.prototype.connected = function (p, q) {
    return this.list[p] === this.list[q] ? true : false;
};

module.exports = QuickFind;