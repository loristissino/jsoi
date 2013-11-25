// Construct a list of  n  random integers from  r  to  s
// random() returns a uniformly distributed random number in [0,1)

random_list = function(n, r, s) {
    var a = [];
    for (var i = 0; i &lt; n; i++) {
	a[i] = floor(random()*(s-r+1)) + r;
    }
    return a;
}

random_list(100,1,10);

/*
 * Copyright 2013 Peter Jepsen
 * see https://github.com/loristissino/ojsi/blob/master/README.md for credits
 */

