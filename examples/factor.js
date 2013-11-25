// Find the prime factors of a positive integer (inefficiently)

primefactors = function(n) {
    var p = 2;
    var a = [];
    while (p*p &lt;= n) {
        if (n%p == 0) {
            n = floor(n/p);
            writeln(n*p+" = "+p+" * "+n);
            a = a.concat([p]);
        } else p = p+1;
    }
    return a.concat([n]);
}

primefactors(1234567891011);
//primefactors(2*3*5*7*11*13 + 1);
//primefactors(123456789123451);

/*
 * Copyright 2013 Peter Jepsen
 * see https://github.com/loristissino/ojsi/blob/master/README.md for credits
 */
