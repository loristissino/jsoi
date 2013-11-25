// Convert a positive base 10 integer to another base

convert = function(n,b) {
    var m = [];
    while (n &gt; 0) {
        m = [n % b].concat(m);
        n = floor(n/b);
    }
    return m;
}

convert(123456789,5);

/*
 * Copyright 2013 Peter Jepsen
 * see https://github.com/loristissino/ojsi/blob/master/README.md for credits
 */

