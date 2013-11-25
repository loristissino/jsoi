<?php

$version_number = "1.1";

$examples=array();

foreach(file('examples/list.txt') as $row)
{
  list($id, $comment)=explode("\t", chop($row));
  $examples[$id]=$comment;
}

?><!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="description" content="Online Javascript Interpreter">
  <meta name="viewport" content="width=device-width">
  <title>Online JavaScript Interpreter, with QUnit</title>
  <link rel="stylesheet" href="resources/initializr/normalize.min.css">
  <link rel="stylesheet" href="resources/initializr/main.css">
  <link rel="stylesheet" href="resources/qunit/qunit.css">
  <link rel="stylesheet" href="resources/ojsi/main.css">
  <script src="resources/qunit/qunit.js"></script>
  <script src="resources/initializr/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
  <script src="resources/ojsi/ojsi.js">
  /*
  This page contains JavaScript functions that evaluate interactive
  JavaScript locally in a browser.
  Find more at https://github.com/loristissino/ojsi
  */
  </script>
</head>
<body onload="JSrun()"><!-- onpaste="return false;"-->
  <div class="header-container">
    <header class="wrapper clearfix">
      <h1 id="long-title">Online JavaScript Interpreter, with QUnit support</h1>
      <h1 id="short-title">OJSI</h1>
      <p class="not-essential">Programming anywhere, nothing to install, works in any browser.</p>
    </header>
  </div>
  <div class="main-container">
    <div class="main wrapper clearfix">
      <p class="not-essential">Type your JavaScript program into the box below. Then click the <b>Run</b>
      button to see the result.  To <b>save your work</b>, select the text
      and copy it to an editor or email it to yourself.<br>
      The results of the QUnit tests are shown below.</p>
      <table id="maintable">
        <tbody><tr><td><b>Type JavaScript</b> &nbsp; &nbsp; Examples: <select id="JSexamples" onchange="JSselect()">
        <option value="">[Select an example]</option>
        <?php foreach($examples as $id=>$comment): ?>
          <option value="<?php echo $id ?>"><?php echo $comment ?></option>
        <?php endforeach ?>
        </select>
        </td><td>
        <input type="button" value="Run (Ctrl-B)" onclick="JSrun()"> &nbsp; &nbsp;
        <b>Output</b> &nbsp; &nbsp; 
        <span id="JSinfo"></span>&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" id="JSname">
        <input type="button" value="Save" onclick="JSsave()">
        <input type="button" value="Load" onclick="JSload()">
        <input type="button" value="List" onclick="JSlist()">
        <input type="button" value="Versions" onclick="JSversions()">
        <input type="button" value="Now" onclick="JSnow()">
        <input type="button" value="Delete" onclick="JSdelete()">
        </td></tr>
        <tr><td id="TDprogram">
        <textarea id="JSprogram" onkeyup="keyUp(event)">// Hello, world!
        
writeln("Hello, world!");
        </textarea>
        </td>
        <td id="TDoutput">
        <textarea id="JSoutput"></textarea></td>
        </tr>
        </tbody>
      </table>

      <p><b>Note that this is dynamic code running locally on your machine.  If
      you leave this page before copying and saving your work, it may
      disappear.
      </b></p>

      <div id="qunit"></div>
      <div id="qunit-fixture"></div>

      <p>
      <b>Quick reference to basic JavaScript commands</b>. Search online
      for <a href="http://www.google.com/search?q=javascript+tutorial">tutorials</a>
      <table>
      <tbody><tr>
      <td><b>Comment</b></td>
      <td><pre>// this is a one-line comment
      /* this comment could contain linebreaks */
      </pre></td>
      </tr>
      <tr>
      <td><b>Constant</b></td>
      <td><span class="code"><b>numbers</b> 12.3 <b>and strings</b> "hi", "hi".charAt(0) <b>is</b> "h"</span></td>
      </tr>
      <tr>
      <td><b>Variable</b></td>
      <td><span class="code"><b>start with a letter, then use letters, digits or _ (declared with</b> var<b>)</b></span></td>
      </tr>
      <tr>
      <td><b>Expression</b></td>
      <td><span class="code"><b>built from</b> +, -, *, /, pow(x,y), sqrt(), PI, E, log(), floor(), ceil(),<br>
      random(), sin(), cos(), tan(), atan() <b>and constants, variables, functions</b></span></td>
      </tr>
      <tr>
      <td><b>Assignment</b></td>
      <td><pre>v = expression;</pre></td>
      </tr>
      <tr>
      <td><b>Block</b></td>
      <td><pre>{   statement 1;
          ...
          statement n;
      }</pre></td>
      </tr>
      <tr>
      <td><b>Condition</b></td>
      <td><span class="code">expression == expression <b>or</b> &lt;=, &lt;, &gt;, &gt;=, !=...<br>
      <b>or</b> !cond, cond1 &amp;&amp; cond2, cond1 || cond2</span></td>
      </tr>
      <tr>
      <td><b>if - else</b></td>
      <td><pre>if (condition) block 1
      else block 2                   // optional
      </pre></td>
      </tr>
      <tr>
      <td><b>for-loop</b></td>
      <td><pre>for (var i=start; endcondition; i++)
          block
      </pre></td>
      </tr>
      <tr>
      <td><b>while-loop</b></td>
      <td><pre>while (condition) 
          block
      </pre></td>
      </tr>
      <tr>
      <td><b>Function</b></td>
      <td><pre>f = function(v1, ..., vn) {
          statement 1;
          ...
          return expression;
      }
      </pre></td>
      </tr>
      <tr>
      <td><b>List</b> (array)</td>
      <td><pre>a = [1,2,"hi"]
      a[0] is 1, a.length is 3, a+[4] is [1,2,"hi",4]</pre></td>
      </tr>
      <tr>
      <td><b>Object</b><br>(hash tables)</td>
      <td><pre>object = {attribute:expression, method:function}
      a = {x:2, y:3, s:function(){return this.x+this.y}}
      a.x is 3, a["x"] is 3, a.s() is 5
      </pre></td>
      </tr>
      <tr>
      <td><b>Input</b></td>
      <td><pre>name=prompt("What's your name?");
      </pre></td>
      </tr>
      <tr>
      <td><b>Output</b></td>
      <td><pre>write("Hello"); writeln(" world");
      </pre></td>
      </tr>
      </tbody></table>

      <!--
      <p>
      This page is useful for experimenting with basic JavaScript and simple
      algorithms (e.g. those covered in a discrete mathematics course). It
      should work in any browser that has JavaScript enabled (including
      smartphone browsers).
      </p>

      <p>
      You can save your own local copy of this page (using <b>Save As...</b>),
      and use it even when you are not connected to the internet.
      </p>
      -->

    </div>
  </div>

<?php foreach($examples as $id=>$comment): ?>
<textarea id="<?php echo $id ?>" style="display:none"><?php readfile('examples/' .$id . '.js') ?>
</textarea>
<?php endforeach ?>
<hr>

  <div class="footer-container">
    <footer class="wrapper">
      <p>Original version by <a href="http://www.chapman.edu/~jipsen/">Peter Jipsen</a>, January 2013, <a href="http://www.chapman.edu/">Chapman University</a><br />
      Added unit testing support by <a href="http://loris.tissino.it">Loris Tissino</a>, November 2013 -- version <?php echo $version_number ?><br>
      You can use a local copy of this page by downloading the files you need from this <a href="https://github.com/loristissino/ojsi/blob/master/downloads/ojsi.zip?raw=true">zip file</a> and unzipping it into a local directory: use it even when you are not connected to the internet.</p>

    </footer>
  </div>



</body></html>
