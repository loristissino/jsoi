var c=document.getElementById("JScanvas");
var ctx=c.getContext("2d");
var i;

ctx.clearRect(0, 0, c.width, c.height); // clean up

ctx.beginPath();
for (i=1; i<=10; i++) {
  ctx.moveTo(i*10+1,0);
  ctx.lineTo(i*10+1,i*7);
  ctx.stroke();
}

ctx.beginPath();
ctx.arc(101,70,50,0,2*Math.PI);
ctx.strokeStyle="red";
ctx.stroke();


/* 
see many examples at http://www.w3schools.com/html/html5_canvas.asp
*/
