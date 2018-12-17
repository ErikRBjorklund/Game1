function drawPlayer1(x, y, face)
{
    if(face === "sw")
    {
        drawChest(x- 2, y + 25, 15, 15, 30);
        //drawArm(x + 8, y + 15, 5, 5, 10);
        drawArm1(x + 8, y + 15, 5, 5, 10);
        drawGun1(x + 3, y + 18, 5, 5, 10);
        drawHead(x, y, 22, 22, 22, "sw");
    }
    if(face === "se")
    {
        drawChest(x - 2, y + 25, 15, 15, 30);
        drawArm2(x - 12, y + 15, 5, 5, 10);
        drawGun2(x -7, y + 18, 5, 5, 10);
        drawHead(x, y, 22, 22, 22, "se");
    }
    if(face === "nw")
    {
        drawChest(x- 2, y + 25, 15, 15, 30);
        drawGun3(x - 13, y + 3, 5, 5, 10);
        drawArm2(x - 16, y + 10, 5, 5, 10);
        drawHead(x, y, 22, 22, 22, "nw");
    }
    if(face === "ne")
    {
        drawChest(x- 2, y + 25, 15, 15, 30);
        drawGun4(x + 13, y + 3, 5, 5, 10);
        drawArm1(x + 16, y + 10, 5, 5, 10);
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
function drawArm1(x, y, wx, wy, h) 
{
    
    // left face
    ctx.beginPath();
    ctx.moveTo(x - 8, y);
    ctx.lineTo(x - 13, y - h  +7);
    ctx.lineTo(x - 13, y - h + 1);

    ctx.lineTo(x - 8, y - h + 5);

    ctx.closePath();
    ctx.fillStyle = "#bda27e"; //#80461B
    ctx.strokeStyle = "#544838";
    ctx.stroke();
    ctx.fill();

    // right face
    ctx.beginPath();
    ctx.moveTo(x - 8, y);
    ctx.lineTo(x + wy, y - wy * 0.5 -4);
    ctx.lineTo(x + wy, y - h - wy * 0.5);
    ctx.lineTo(x - 8, y - h + 4);
    ctx.closePath();
    ctx.fillStyle = "#bda27e"; //#80461B
    ctx.strokeStyle = "#544838";
    ctx.stroke();
    ctx.fill();

    // center face
    ctx.beginPath();
    ctx.moveTo(x - 8, y - h + 4);
    ctx.lineTo(x - 12, y - h + 1);
    ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
    ctx.lineTo(x + wy, y - h - wy * 0.5);
    ctx.closePath();
    ctx.fillStyle = "#bda27e"; //#80461B
    ctx.strokeStyle = "#544838";
    ctx.stroke();
    ctx.fill();  
       
}
function drawArm2(x, y, wx, wy, h) 
{
    
   // left face
   ctx.beginPath();
   ctx.moveTo(x + 8, y);
   ctx.lineTo(x + 13, y - h  +7);
   ctx.lineTo(x + 13, y - h + 1);
   
   ctx.lineTo(x + 8, y - h + 5);
   
   ctx.closePath();
   ctx.fillStyle = "#bda27e";
   ctx.strokeStyle = "#544838";
   ctx.stroke();
   ctx.fill();
    
   // right face
   ctx.beginPath();
   ctx.moveTo(x + 8, y);
   ctx.lineTo(x - wy, y - wy * 0.5 -4);
   ctx.lineTo(x - wy, y - h - wy * 0.5);
   ctx.lineTo(x + 8, y - h + 4);
   ctx.closePath();
   ctx.fillStyle = "#bda27e"; // 
   ctx.strokeStyle = "#544838"; //"#676744"
   ctx.stroke();
   ctx.fill();

   // center face
   ctx.beginPath();
   ctx.moveTo(x + 8, y - h + 4);
   ctx.lineTo(x + 12, y - h + 1);
   ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
   ctx.lineTo(x - wy, y - h - wy * 0.5);
   ctx.closePath();
   ctx.fillStyle = "#bda27e";
   ctx.strokeStyle = "#544838"; 
   ctx.stroke();
   ctx.fill();  
       
}
function drawGun1(x, y, wx, wy, h) 
{
    
    // right face HANDLE
    ctx.beginPath();
    ctx.moveTo(x - 9, y);
    ctx.lineTo(x - 9, y - h  +5);
    ctx.lineTo(x - 4, y - h + 2);
    ctx.lineTo(x - 4, y - h + 8);
    ctx.closePath();
    ctx.fillStyle = "#585858"; //#80461B
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();
    
    // left face HANDLE
    ctx.beginPath();
    ctx.moveTo(x - 9, y);
    ctx.lineTo(x - 13, y - h  +7);
    ctx.lineTo(x - 13, y - h + 1);
    ctx.lineTo(x - 9, y - h +4);
    ctx.closePath();
    ctx.fillStyle = "#585858"; //#80461B
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();


    // left face
    ctx.beginPath();
    ctx.moveTo(x - 13, y-4);
    ctx.lineTo(x - 18, y - h  +3);
    ctx.lineTo(x - 18, y - h -3);
    ctx.lineTo(x - 13, y - h + 1);
    ctx.closePath();
    ctx.fillStyle = "#585858"; //#80461B
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();

    // right face
    ctx.beginPath();
    ctx.moveTo(x - 13, y - 4);
    ctx.lineTo(x + wy - 9, y - wy * 0.5 - 6);
    ctx.lineTo(x + wy - 9, y - h - wy * 0.5 - 2);
    ctx.lineTo(x - 13, y - h);
    ctx.closePath();
    ctx.fillStyle = "#585858"; //#80461B
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();

    // center face
    ctx.beginPath();
    ctx.moveTo(x - 13, y - h);
    ctx.lineTo(x - 17, y - h - 3);
    ctx.lineTo(x - wx + wy - 9, y - h - (wx * 0.5 + wy * 0.5) - 2);
    ctx.lineTo(x + wy - 9, y - h - wy * 0.5 - 2);
    ctx.closePath();
    ctx.fillStyle = "#585858"; //#80461B
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();  

    
    

    


       
}
function drawGun2(x, y, wx, wy, h) 
{
    
    // right face HANDLE
    ctx.beginPath();
    ctx.moveTo(x + 9, y);
    ctx.lineTo(x + 9, y - h  +5);
    ctx.lineTo(x + 4, y - h + 2);
    ctx.lineTo(x + 4, y - h + 8);
    ctx.closePath();
    ctx.fillStyle = "#585858"; //#80461B
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();
    
    // left face HANDLE
    ctx.beginPath();
    ctx.moveTo(x + 9, y);
    ctx.lineTo(x + 13, y - h  +7);
    ctx.lineTo(x + 13, y - h + 1);
    ctx.lineTo(x + 9, y - h +4);
    ctx.closePath();
    ctx.fillStyle = "#585858"; //#80461B
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();


    // left face
    ctx.beginPath();
    ctx.moveTo(x + 13, y-4);
    ctx.lineTo(x + 18, y - h  +3);
    ctx.lineTo(x + 18, y - h -3);
    ctx.lineTo(x + 13, y - h);
    ctx.closePath();
    ctx.fillStyle = "#585858"; //#80461B
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();

    // right face
    ctx.beginPath();
    ctx.moveTo(x + 13, y - 4);
    ctx.lineTo(x - wy + 9, y - wy * 0.5 - 6);
    ctx.lineTo(x - wy + 9, y - h - wy * 0.5 - 2);
    ctx.lineTo(x + 13, y - h);
    ctx.closePath();
    ctx.fillStyle = "#585858"; //#80461B
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();

    // center face
    ctx.beginPath();
    ctx.moveTo(x + 13, y - h);
    ctx.lineTo(x + 17, y - h - 3);
    ctx.lineTo(x + wx - wy + 9, y - h - (wx * 0.5 + wy * 0.5) - 2);
    ctx.lineTo(x - wy + 9, y - h - wy * 0.5 - 2);
    ctx.closePath();
    ctx.fillStyle = "#585858"; //#80461B
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();  

    
    

    


       
}
function drawGun3(x, y, wx, wy, h) 
{
    
   // right face HANDLE
   ctx.beginPath();
   ctx.moveTo(x - 9, y);
   ctx.lineTo(x - 9, y - h  +5);
   ctx.lineTo(x - 4, y - h + 2);
   ctx.lineTo(x - 4, y - h + 8);
   ctx.closePath();
   ctx.fillStyle = "#585858"; //#80461B
   ctx.strokeStyle = "black";
   ctx.stroke();
   ctx.fill();
   
   // left face HANDLE
   ctx.beginPath();
   ctx.moveTo(x - 9, y);
   ctx.lineTo(x - 13, y - h  +7);
   ctx.lineTo(x - 13, y - h + 1);
   ctx.lineTo(x - 9, y - h +4);
   ctx.closePath();
   ctx.fillStyle = "#585858"; //#80461B
   ctx.strokeStyle = "black";
   ctx.stroke();
   ctx.fill();


   

   // right face
   ctx.beginPath();
   ctx.moveTo(x - 17, y - 16);
   ctx.lineTo(x + wy - 13, y + wy * 0.5 - 14);
   ctx.lineTo(x + wy - 13, y + h + wy * 0.5 - 18);
   ctx.lineTo(x - 17, y + h - 20);
   ctx.closePath();
   ctx.fillStyle = "#585858"; //#80461B
   ctx.strokeStyle = "black";
   ctx.stroke();
   ctx.fill();

   // center face
   ctx.beginPath();
   ctx.moveTo(x - 13, y + h - 29);
   ctx.lineTo(x - 17, y + h + 3 - 29);
   ctx.lineTo(x - wx + wy - 9, y + h + (wx * 0.5 + wy * 0.5) + 2 - 29);
   ctx.lineTo(x + wy - 9, y + h + wy * 0.5 + 2 - 29);
   ctx.closePath();
   ctx.fillStyle = "#585858"; //#80461B
   ctx.strokeStyle = "black";
   ctx.stroke();
   ctx.fill();  


   // right face
   ctx.beginPath();
   ctx.moveTo(x - 8, y - 6);
   ctx.lineTo(x - 8, y - h - 2);
   ctx.lineTo(x - 4, y - h - 4);
   ctx.lineTo(x - 4, y - h + 2);
   ctx.closePath();
   ctx.fillStyle = "#585858"; //#80461B
   ctx.strokeStyle = "black";
   ctx.stroke();
   ctx.fill();
   
}
function drawGun4(x, y, wx, wy, h) 
{
    
   // right face HANDLE
   ctx.beginPath();
   ctx.moveTo(x + 9, y + 1);
   ctx.lineTo(x + 9, y - h  +5);
   ctx.lineTo(x + 4, y - h + 2);
   ctx.lineTo(x + 4, y - h + 8);
   ctx.closePath();
   ctx.fillStyle = "#585858"; //#80461B
   ctx.strokeStyle = "black";
   ctx.stroke();
   ctx.fill();
   
   // left face HANDLE
   ctx.beginPath();
   ctx.moveTo(x + 9, y);
   ctx.lineTo(x + 13, y - h  +8);
   ctx.lineTo(x + 13, y - h + 2);
   ctx.lineTo(x + 9, y - h +3);
   ctx.closePath();
   ctx.fillStyle = "#585858"; //#80461B
   ctx.strokeStyle = "black";
   ctx.stroke();
   ctx.fill();


   

   // right face
   ctx.beginPath();
   ctx.moveTo(x + 17, y - 16);
   ctx.lineTo(x - wy + 13, y + wy * 0.5 - 14);
   ctx.lineTo(x - wy + 13, y + h + wy * 0.5 - 18);
   ctx.lineTo(x + 17, y + h - 20);
   ctx.closePath();
   ctx.fillStyle = "#585858"; //#80461B
   ctx.strokeStyle = "black";
   ctx.stroke();
   ctx.fill();

   // center face
   ctx.beginPath();
   ctx.moveTo(x + 13, y + h - 29);
   ctx.lineTo(x + 17, y + h + 3 - 29);
   ctx.lineTo(x + wx - wy + 9, y + h + (wx * 0.5 + wy * 0.5) + 2 - 29);
   ctx.lineTo(x - wy + 9, y + h + wy * 0.5 + 2 - 29);
   ctx.closePath();
   ctx.fillStyle = "#585858"; //#80461B
   ctx.strokeStyle = "black";
   ctx.stroke();
   ctx.fill();  


   // right face
   ctx.beginPath();
   ctx.moveTo(x + 8, y - 6);
   ctx.lineTo(x + 8, y - h - 2);
   ctx.lineTo(x + 4, y - h - 4);
   ctx.lineTo(x + 4, y - h + 2);
   ctx.closePath();
   ctx.fillStyle = "#585858"; //#80461B
   ctx.strokeStyle = "black";
   ctx.stroke();
   ctx.fill();
   
}
function checkDead()
{
    if(playerHealth <= 0)
    {
        return true;
    }
    return false;
}