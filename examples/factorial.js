// Calculate the factorial of a natural number using recursion

factorial = function(n) { // simple version
    if (n &lt;= 0) return 1;
    else return n*factorial(n-1);
}

factorialw = function(n) { // write intermediate results
    var k;
    if (n &lt;= 0) return 1;
    else {
        writeln("n = "+n);
        k = n*factorialw(n-1);
        writeln("k = "+k);
        return k;
    }
}

factorialw(10);

/*
 * Copyright 2013 Peter Jepsen
 * see https://github.com/loristissino/ojsi/blob/master/README.md for credits
 */
