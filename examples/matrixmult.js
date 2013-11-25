// multiply two matrices

mult = function(A,B) {
    var C = [];
    for (var i = 0; i &lt; A.length; i++) {
        C[i] = [];
        for (var j = 0; j &lt; B[0].length; j++) {
            C[i][j] = 0;
            for (var k = 0; k &lt; A[0].length; k++) 
                C[i][j] = C[i][j] + A[i][k]*B[k][j];
        }
    }
    return C;
}

var A = random_matrix(3,3,0,4); writeln(A)
var B = random_matrix(3,3,0,4); writeln(B)
mult(A,B);

/*
 * Copyright 2013 Peter Jepsen
 * see https://github.com/loristissino/ojsi/blob/master/README.md for credits
 */
