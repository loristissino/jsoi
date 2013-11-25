// Find the greatest common divisor of two positive integers
// using the Euclidean algorithm

gcd = function(a,b) {
    var r;
    while (b &gt; 0) {
        writeln("a = "+a+", b = "+b);
        r = a % b;       // remainder
        a = b;
        b = r;
    }
    return a;
}

gcd(49,84);
//gcd(fibonacci(15),fibonacci(14));

/*
 * Copyright 2013 Peter Jepsen
 * see https://github.com/loristissino/ojsi/blob/master/README.md for credits
 */

