// Construct a matrix of m x n random integers from r to s

random_matrix = function(m, n, r, s) {
    var A = [];
    for (var i = 0; i &lt; m; i++) {
        A[i] = [];
        for (var j = 0; j &lt; n; j++)
            A[i][j] = Math.floor(Math.random()*(s-r+1)) + r;
    }
    return A;
}

random_matrix(3,3,0,4);

/*
 * Copyright 2013 Peter Jepsen
 * see https://github.com/loristissino/ojsi/blob/master/README.md for credits
 */
