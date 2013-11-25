/*

Note to the original version:
* ---------
Version of Jan 3, 2013, (c) Peter Jipsen http://www.chapman.edu/~jipsen
Latest version at http://www.chapman.edu/~jipsen/js
If you use it on a webpage, please send the URL to jipsen@chapman.edu
* --------- (end of Note to the original version)

Added Qunit support and sample on October 3, 2013, (c) Loris Tissino 
http://loris.tissino.it

Find more at https://github.com/loristissino/ojsi

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or (at
your option) any later version.

This program is distributed in the hope that it will be useful, 
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
General Public License (at http://www.gnu.org/copyleft/gpl.html) 
for more details.
*/

JSoutput = function(a) {
    var str = "["
    if (typeof(a)=="object" && a.length) {
        for (var i=0; i < a.length; i++) 
            if (typeof(a[i])=="object" && a[i].length) {
                str += (i==0?"":" ")+"["
                for (var j=0; j<a[i].length; j++) 
                    str += a[i][j]+(j==a[i].length-1?
                            "]"+(i==a.length-1?"]":",")+"\n":", ");
            } else str += a[i]+(i==a.length-1?"]":", ");
    } else str = a;
    return str;
}

write = function(str) {
    var outnode = document.getElementById("JSoutput");
    outnode.value += JSoutput(str);
}

writeln = function(str) {
    if (!str) str="";
    var outnode = document.getElementById("JSoutput");
    outnode.value += JSoutput(str)+"\n";
}

JSrun = function() {
    var str;
    var outnode = document.getElementById("JSoutput");
    outnode.value = "";

    // test added by Loris Tissino in order to be able to rerun the code
    var qunittestsnode = document.getElementById("qunit-tests");
    if(qunittestsnode) {
        qunittestsnode.innerHTML = "";
    }

    d = new Date().getTime();
    try {
        with (Math) {
            str = JSoutput(eval(document.getElementById("JSprogram").value));
        }
    } catch(e) {
        str = e.name + ": " + e.message;
    }
    var tnode = document.getElementById("JSinfo");
    tnode.innerHTML = "Timing: "+(new Date().getTime()-d)/1000 + " s";
    if (str != undefined) {outnode.value += str;}
}

JSselect = function() {
    var id = document.getElementById("JSexamples").value;
    var str = document.getElementById(id).value;
    document.getElementById("JSprogram").value = str;
    JSrun();
}

keyUp = function(event){
  if (event.ctrlKey && event.keyCode == 'B'.charCodeAt(0)) JSrun();
}

function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}

JSsave = function() {
  var name=document.getElementById("JSname").value;
  var info=document.getElementById("JSinfo");
  if(supports_html5_storage()) {
    if(name.length>0) {
      localStorage[name]=document.getElementById("JSprogram").value;
      info.innerHTML="Saved!";
      }
    else {
      info.innerHTML="No name provided.";
      }
    }
  else {
    info.innerHTML="Local storage not supported.";
    }
  }

JSload = function() {
  var name=document.getElementById("JSname").value;
  var info=document.getElementById("JSinfo");
  if(supports_html5_storage()) {
    document.getElementById("JSprogram").value = localStorage[name];
    info.innerHTML="Loaded.";
    }
  }

JSdelete = function() {
  var namefield=document.getElementById("JSname");
  var info=document.getElementById("JSinfo");
  if(supports_html5_storage()) {
    if(confirm("Sure?")) {
      localStorage.removeItem(namefield.value);
      namefield.value="";
      info.innerHTML="Deleted!";
      }
    }
  }

JSlist = function() {
  var info=document.getElementById("JSinfo");
  if(supports_html5_storage()) {
    str = "";
    for (id in localStorage) {
      str += id + "\n";
    }
    document.getElementById("JSoutput").value = str;
    }
    info.innerHTML="Listed.";
  }

JSversions = function() {
  var info=document.getElementById("JSinfo");
  if(supports_html5_storage()) {
    str = "";
    for (id in localStorage) {
      str += "/* ----------------- " + id + " -----------------*/\n";
      str += localStorage[id];
      str += "\n\n";
    }
    document.getElementById("JSoutput").value = str;
    }
    info.innerHTML="Shown.";
  }

function padToTwo(number) {
  if (number<=9) { number = ("0"+number).slice(-2); }
  return number;
}

JSnow = function() {
  var name=document.getElementById("JSname");
  var info=document.getElementById("JSinfo");
  var pos=name.value.indexOf("-");
  if(pos>=0) {
    var currentdate = new Date(); 
    var datetime = padToTwo(currentdate.getHours()) + "" 
      + padToTwo(currentdate.getMinutes()) + ""
      + padToTwo(currentdate.getSeconds());
    
    name.value=name.value.substr(0,pos) + "-" + datetime;
    info.innerHTML="Ready.";
    }
  else {
    info.innerHTML="No dash found.";
    }
  
  }
  

random_list = function(n, r, s) {
    var a = [];
    for (var i = 0; i < n; i++) {
	a[i] = Math.floor(Math.random()*(s-r+1)) + r;
    }
    return a;
}

random_matrix = function(m, n, r, s) {
    var A = [];
    for (var i = 0; i < m; i++) {
        A[i] = [];
        for (var j = 0; j < n; j++)
            A[i][j] = Math.floor(Math.random()*(s-r+1)) + r;
    }
    return A;
}

factorial = function(n) { // simple version
    if (n <= 0) return 1;
    else return n*factorial(n-1);
}

fibonacci = function(n) {
    var a = 0;
    var b = 1;
    for (var i=0; i<n; i++) {
        b = a+b;
        a = b-a;
    }
    return a;
}
