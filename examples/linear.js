// Find first occurrence of an element in a list of numbers

linear_search = function(x,a) {
    var i = 0;
    while (i &lt; a.length &amp;&amp; x != a[i]) {
        writeln("i = "+i);
        i = i+1;
    }
    if (i &lt; a.length) return i;
    else return "not found";
}

var a = random_list(6,1,10);
writeln(a);
linear_search(3,a);

/*
 * Copyright 2013 Peter Jepsen
 * see https://github.com/loristissino/ojsi/blob/master/README.md for credits
 */

