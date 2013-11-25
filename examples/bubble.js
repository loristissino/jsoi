// Sort a list of numbers using (inefficient) bubble sort

bubble_sort = function(a) {
    var t;
    for (var i = 0; i &lt; a.length-1; i++) 
        for (var j = 0; j &lt; a.length-i; j++) 
            if (a[j] &gt; a[j+1]) {
                writeln("swap "+a[j]+", "+a[j+1]);
                t = a[j];
                a[j] = a[j+1];
                a[j+1] = t;
	    }
    return a;
}

a = random_list(6,1,10);
writeln(a);
bubble_sort(a);

/*
 * Copyright 2013 Peter Jepsen
 * see https://github.com/loristissino/ojsi/blob/master/README.md for credits
 */
