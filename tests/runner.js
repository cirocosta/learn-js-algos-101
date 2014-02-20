'use strict';

/**
 * Lists all of the functions that execute the tests.
 * @type {Array}
 */
var tests = [
    require('./test-file-line-reader'),
    require('./test-union-find')
];

/**
 * Runs all of the functions, i.e, the tests that we had created and
 * listed at the tests list.
 */
(function () {
    for (var i in tests) {
        var test = tests[i];
        test.fn.apply(null);
        console.log(test.name + " --- ok");
    }
})();