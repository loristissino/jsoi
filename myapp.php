<?php

$version_number = "1.4";

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
  <title>Online JavaScript Interpreter, with QUnit support</title>
  <link rel="stylesheet" href="resources/initializr/normalize.min.css">
  <link rel="stylesheet" href="resources/initializr/main.css">
  <link rel="stylesheet" href="resources/qunit/qunit.css">
  <link rel="stylesheet" href="resources/ojsi/main.css">
  <script src="resources/qunit/qunit.js"></script>
  <script src="resources/initializr/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
  <script src="resources/jush/jush.js"></script>
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
      <h1 id="long-title">My App!</h1>
      <h1 id="short-title">My App!</h1>
    </header>
  </div>
  <div class="main-container">
    <div class="main wrapper clearfix">
      <input type="button" value="Run (Ctrl-B)" onclick="JSrun()"> &nbsp; &nbsp;
      <textarea id="JSoutput" style="height:3in"></textarea>
      <textarea id="JSprogram" style="display: none">
// paste here your working code
var a = prompt("What's your name?") || "Unknown User";
writeln("Hello, " + a + ".");
      </textarea>
  <hr>

  <div class="footer-container">
    <footer class="wrapper">
      <p>Based on <a href="http://www.tissino.it/ojsi/">OJSI</a>, Online JavaScript Interpreter</p>
    </footer>
  </div>

</body></html>
