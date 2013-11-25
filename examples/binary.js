// Find first occurrence of an element in a *sorted* list of numbers

binary_search = function(x,a) {
    var i = 0;           // i is the left endpoint of the search interval
    var j = a.length-1;  // j is the right endpoint of the search interval
    while (i &lt; j) {
        writeln("i="+i+", j="+j);
        m = floor((i+j)/2);
        if (x &gt; a[m]) i = m+1;
        else j = m;
    }
    if (x == a[i]) return i;
    else return "not found";
}

binary_search(3, [1,2,2,2,3,3,4,5,6,7,8]);

/*
 * Copyright 2013 Peter Jepsen
 * see https://github.com/loristissino/ojsi/blob/master/README.md for credits
 */

