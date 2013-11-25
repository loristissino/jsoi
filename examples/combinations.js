// Calculate the binomial coefficient C(n,k)

C = function(n,k) {
    var c = 1;
    for (var i=1; i&lt;=k; i++) {
        writeln("c = "+c);
        c = c*(n-k+i)/i;
    }
    return c;
}

C(50,20);

/*
 * Copyright 2013 Peter Jepsen
 * see https://github.com/loristissino/ojsi/blob/master/README.md for credits
 */
