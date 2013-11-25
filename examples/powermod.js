// Calculate the n-th power mod m efficiently

powermod = function(b,n,m) {
    var x = 1;
    var p = b % m;
    while (n &gt; 0) {
        if (n%2 == 1) x = (x*p) % m;
        p = (p*p) % m;
        n = floor(n/2);
        writeln("n = "+n+", x = "+x);
    }
    return x;
}

powermod(123456789, 543, 12345);

/*
 * Copyright 2013 Peter Jepsen
 * see https://github.com/loristissino/ojsi/blob/master/README.md for credits
 */
