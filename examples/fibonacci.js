// Calculate the n-th Fibonacci number iteratively

fibonacci = function(n) {
    var a = 0;
    var b = 1;
    for (var i=0; i&lt;n; i++) {
        write(a+" ");
        b = a+b;
        a = b-a;
    }
    writeln("\n");
    return a;
}

fibonacci(50);

/*
 * Copyright 2013 Peter Jepsen
 * see https://github.com/loristissino/ojsi/blob/master/README.md for credits
 */
 
