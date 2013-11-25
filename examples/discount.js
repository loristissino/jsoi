// basic input / output

var initial_amount;
var discount_percentage;
var net_amount;

initial_amount = prompt("What's the amount?", 1000);
discount_percentage = prompt("What's the percentage of discount?", 20);

net_amount = initial_amount * (100 - discount_percentage) / 100;

writeln("The net amount is: " + net_amount);
