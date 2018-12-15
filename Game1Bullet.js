function drawBullet(x, y, wx, wy, h) 
{
   // left face
   ctx.beginPath();
   ctx.moveTo(x, y - 40);
   ctx.lineTo(x - wx, y - wx * 0.5 - 40);
   ctx.lineTo(x - wx, y - h - wx * 0.5 - 40);
   ctx.lineTo(x, y - h * 1 - 40);
   ctx.closePath();
   ctx.fillStyle = "#484848"; //"#bda27e"
   ctx.strokeStyle = "#202020";
   ctx.stroke();
   ctx.fill();


   
   // right face
   ctx.beginPath();
   ctx.moveTo(x, y - 40);
   ctx.lineTo(x + wy, y - wy * 0.5 - 40);
   ctx.lineTo(x + wy, y - h - wy * 0.5 - 40);
   ctx.lineTo(x, y - h * 1 - 40);
   ctx.closePath();
   ctx.fillStyle = "#484848"; // "#a89070"
   ctx.strokeStyle = "#202020"; //"#676744"
   ctx.stroke();
   ctx.fill();

   // center face
   ctx.beginPath();
   ctx.moveTo(x, y - h - 40);
   ctx.lineTo(x - wx, y - h - wx * 0.5 - 40);
   ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5) - 40);
   ctx.lineTo(x + wy, y - h - wy * 0.5 - 40);
   ctx.closePath();
   ctx.fillStyle = "#484848";
   ctx.strokeStyle = "#202020"; 
   ctx.stroke();
   ctx.fill();      


   // shadow face
   ctx.beginPath();
   ctx.moveTo(x, y - h);
   ctx.lineTo(x - wx, y - h - wx * 0.5);
   ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
   ctx.lineTo(x + wy, y - h - wy * 0.5);
   ctx.closePath();
   ctx.fillStyle = "black";
   ctx.strokeStyle = "black"; 
   ctx.stroke();
   ctx.fill();      
}