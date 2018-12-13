function drawPlayer1(x, y, face)
{
    if(face === "sw")
    {
        drawChest(x- 2, y + 25, 15, 15, 30);
        drawArm(x + 8, y + 15, 5, 5, 10);
        drawHead(x, y, 22, 22, 22, "sw");
    }
    if(face === "se")
    {
        drawChest(x- 2, y + 25, 15, 15, 30);
        drawArm(x - 12, y + 15, 5, 5, 10);
        drawHead(x, y, 22, 22, 22, "se");
    }
    if(face === "nw")
    {
        drawChest(x- 2, y + 25, 15, 15, 30);
        drawArm(x - 12, y + 15, 5, 5, 10);
        drawHead(x, y, 22, 22, 22, "nw");
    }
    if(face === "ne")
    {
        drawChest(x- 2, y + 25, 15, 15, 30);
        drawArm(x + 8, y + 15, 5, 5, 10);
        drawHead(x, y, 22, 22, 22, "ne");
    }
    
    
}
function drawHelmet1()
{

}
function drawChestplate1()
{

}
function drawMelee1()
{

}
function drawRanged1()
{

}

function drawHead(x, y, wx, wy, h, face) 
{
    // left face
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - wx, y - wx * 0.5);
    ctx.lineTo(x - wx, y - h - wx * 0.5);
    ctx.lineTo(x, y - h * 1);
    ctx.closePath();
    ctx.fillStyle = "#bda27e"; //#80461B
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();

    

    // right face
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + wy, y - wy * 0.5);
    ctx.lineTo(x + wy, y - h - wy * 0.5);
    ctx.lineTo(x, y - h * 1);
    ctx.closePath();
    ctx.fillStyle = "#a89070"; // 
    ctx.strokeStyle = "black"; //"#676744"
    ctx.stroke();
    ctx.fill();
    if(face === "sw")
    {
            // right face HAIR
        ctx.beginPath();
        ctx.moveTo(x, y - 18);
        ctx.lineTo(x + wy, y - wy * 0.5);
        ctx.lineTo(x + wy, y - h - wy * 0.5);
        ctx.lineTo(x, y - h * 1);
        ctx.closePath();
        ctx.fillStyle = "#80461B"; // 
        ctx.strokeStyle = "black"; //"#676744"
        ctx.stroke();
        ctx.fill();

        // left face HAIR
        ctx.beginPath();
        ctx.moveTo(x, y - 18);
        ctx.lineTo(x - wx, y - wx * 0.5 - 18);
        ctx.lineTo(x - wx, y - h - wx * 0.5);
        ctx.lineTo(x, y - h * 1);
        ctx.closePath();
        ctx.fillStyle = "#80461B"; //#80461B
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.fill();
    }
    if(face === "se")
    {
           // right face HAIR
           ctx.beginPath();
           ctx.moveTo(x, y - 18);
           ctx.lineTo(x + wy, y - wy * 0.5 - 18);
           ctx.lineTo(x + wy, y - h - wy * 0.5);
           ctx.lineTo(x, y - h * 1);
           ctx.closePath();
           ctx.fillStyle = "#80461B"; // 
           ctx.strokeStyle = "black"; //"#676744"
           ctx.stroke();
           ctx.fill();
   
           // left face HAIR
           ctx.beginPath();
           ctx.moveTo(x, y - 18);
           ctx.lineTo(x - wx, y - wx * 0.5);
           ctx.lineTo(x - wx, y - h - wx * 0.5);
           ctx.lineTo(x, y - h * 1);
           ctx.closePath();
           ctx.fillStyle = "#80461B"; //#80461B
           ctx.strokeStyle = "black";
           ctx.stroke();
           ctx.fill();
    }
    if(face === "nw")
    {
           // right face HAIR
           ctx.beginPath();
           ctx.moveTo(x, y);
           ctx.lineTo(x + wy, y - wy * 0.5);
           ctx.lineTo(x + wy, y - h - wy * 0.5);
           ctx.lineTo(x, y - h * 1);
           ctx.closePath();
           ctx.fillStyle = "#80461B"; // 
           ctx.strokeStyle = "black"; //"#676744"
           ctx.stroke();
           ctx.fill();
   
           // left face HAIR
           ctx.beginPath();
           ctx.moveTo(x, y);
           ctx.lineTo(x - wx, y - wx * 0.5-18);
           ctx.lineTo(x - wx, y - h - wx * 0.5);
           ctx.lineTo(x, y - h * 1);
           ctx.closePath();
           ctx.fillStyle = "#80461B"; //#80461B
           ctx.strokeStyle = "black";
           ctx.stroke();
           ctx.fill();
    }
    if(face === "ne")
    {
            // right face HAIR
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + wy, y - wy * 0.5 - 18);
        ctx.lineTo(x + wy, y - h - wy * 0.5);
        ctx.lineTo(x, y - h * 1);
        ctx.closePath();
        ctx.fillStyle = "#80461B"; // 
        ctx.strokeStyle = "black"; //"#676744"
        ctx.stroke();
        ctx.fill();

        // left face HAIR
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - wx, y - wx * 0.5);
        ctx.lineTo(x - wx, y - h - wx * 0.5);
        ctx.lineTo(x, y - h * 1);
        ctx.closePath();
        ctx.fillStyle = "#80461B"; //#80461B
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.fill();
    }
    
    // center face
    ctx.beginPath();
    ctx.moveTo(x, y - h);
    ctx.lineTo(x - wx, y - h - wx * 0.5);
    ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
    ctx.lineTo(x + wy, y - h - wy * 0.5);
    ctx.closePath();
    ctx.fillStyle = "#80461B"; //"#D2B48C"
    ctx.strokeStyle = "black"; 
    ctx.stroke();
    ctx.fill();      
}
function drawChest(x, y, wx, wy, h) 
{
   // left face
   ctx.beginPath();
   ctx.moveTo(x, y);
   ctx.lineTo(x - wx, y - wx * 0.5);
   ctx.lineTo(x - wx, y - h - wx * 0.5);
   ctx.lineTo(x, y - h * 1);
   ctx.closePath();
   ctx.fillStyle = "#00005B"; //"#bda27e"
   ctx.strokeStyle = "#544838";
   ctx.stroke();
   ctx.fill();


   
   // right face
   ctx.beginPath();
   ctx.moveTo(x, y);
   ctx.lineTo(x + wy, y - wy * 0.5);
   ctx.lineTo(x + wy, y - h - wy * 0.5);
   ctx.lineTo(x, y - h * 1);
   ctx.closePath();
   ctx.fillStyle = "#00005B"; // "#a89070"
   ctx.strokeStyle = "#544838"; //"#676744"
   ctx.stroke();
   ctx.fill();

   // center face
   ctx.beginPath();
   ctx.moveTo(x, y - h);
   ctx.lineTo(x - wx, y - h - wx * 0.5);
   ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
   ctx.lineTo(x + wy, y - h - wy * 0.5);
   ctx.closePath();
   ctx.fillStyle = "#D2B48C";
   ctx.strokeStyle = "#544838"; 
   ctx.stroke();
   ctx.fill();      
}
function drawArm(x, y, wx, wy, h) 
{
   // left face
   ctx.beginPath();
   ctx.moveTo(x, y);
   ctx.lineTo(x - wx, y - wx * 0.5);
   ctx.lineTo(x - wx, y - h - wx * 0.5);
   ctx.lineTo(x, y - h * 1);
   ctx.closePath();
   ctx.fillStyle = "#bda27e";
   ctx.strokeStyle = "#544838";
   ctx.stroke();
   ctx.fill();

   // right face
   ctx.beginPath();
   ctx.moveTo(x, y);
   ctx.lineTo(x + wy, y - wy * 0.5);
   ctx.lineTo(x + wy, y - h - wy * 0.5);
   ctx.lineTo(x, y - h * 1);
   ctx.closePath();
   ctx.fillStyle = "#a89070"; // 
   ctx.strokeStyle = "#544838"; //"#676744"
   ctx.stroke();
   ctx.fill();

   // center face
   ctx.beginPath();
   ctx.moveTo(x, y - h);
   ctx.lineTo(x - wx, y - h - wx * 0.5);
   ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
   ctx.lineTo(x + wy, y - h - wy * 0.5);
   ctx.closePath();
   ctx.fillStyle = "#D2B48C";
   ctx.strokeStyle = "#544838"; 
   ctx.stroke();
   ctx.fill();      
}