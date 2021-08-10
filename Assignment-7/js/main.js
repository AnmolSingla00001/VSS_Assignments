var canvas = document.getElementById("canvas_a");
var context = canvas.getContext("2d");
context.moveTo(0, 0);
context.lineTo(200, 100);
context.stroke();

context.beginPath();
context.arc(150, 150, 90, 0, 2 * Math.PI);
context.stroke();

context.font = "25px Arial";
context.fillText("Canvas Text", 280, 180);
context.strokeText("Canvas Text", 280, 280);

