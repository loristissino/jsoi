// Find the maximum value in a list of numbers

max = function(a) {
    var m = a[0];
    for (var i = 1; i &lt; a.length; i++) {
        writeln("m = "+m);
	if (m &lt; a[i]) m = a[i];
    }
    return m;
}

a = random_list(6,1,10);
writeln(a);
max(a);

/*
 * Copyright 2013 Peter Jepsen
 * see https://github.com/loristissino/ojsi/blob/master/README.md for credits
 */

