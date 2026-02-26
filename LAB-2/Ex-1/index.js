const canvas=document.getElementById("board");
const ctx=canvas.getContext("2d");

ctx.fillStyle="#4a90e2";
ctx.fillRect(40,40,120,80);

ctx.beginPath();
ctx.arc(300,100,50,0,Math.PI*2);
ctx.fillStyle="#f39c12";
ctx.fill();

ctx.beginPath();
ctx.moveTo(50,200);
ctx.lineTo(450,200);
ctx.strokeStyle="#2c3e50";
ctx.lineWidth=4;
ctx.stroke();

ctx.font="28px Arial";
ctx.fillStyle="#111";
ctx.fillText("HTML5 Canvas",160,260);