var zomx = [400];
var zomy = [400];
var zomface = ["sw"];
var zomhealth = [400];
var list = [];
function drawZombie(x, y, face)
{
    if(face === "sw")
    {
        drawZombieChest(x- 2, y + 25, 15, 15, 30);
        drawZombieArm(x + 8, y + 15, 5, 5, 10);
        drawZombieHead(x, y, 22, 22, 22, "sw");
    }
    if(face === "se")
    {
        drawZombieChest(x- 2, y + 25, 15, 15, 30);
        drawZombieArm(x - 12, y + 15, 5, 5, 10);
        drawZombieHead(x, y, 22, 22, 22, "se");
    }
    if(face === "nw")
    {
        drawZombieChest(x- 2, y + 25, 15, 15, 30);
        drawZombieArm(x - 12, y + 15, 5, 5, 10);
        drawZombieHead(x, y, 22, 22, 22, "nw");
    }
    if(face === "ne")
    {
        drawZombieChest(x- 2, y + 25, 15, 15, 30);
        drawZombieArm(x + 8, y + 15, 5, 5, 10);
        drawZombieHead(x, y, 22, 22, 22, "ne");
    }
}
function drawZombies()
{
    for(var i = 0; i < zomx.length; i++)
    {
        drawZombie(zomx[i], zomy[i], zomface[i]);
    }
}
function checkCollision(x, y, xZ, yZ)
{
    var xx1 = x;
    var yy1 = y;
    var xx2 = x+22;
    var yy2 = y-11;
    var xx3 = x;
    var yy3 = y-22;
    var xx4 = x-22;
    var yy4 = y-11;

    var qq1 = .5 * (xx3 + xx1);
    var qq2 = .5 * (yy3 + yy1);
    var aa = .5 * Math.sqrt(Math.pow(xx3 - xx1, 2) + Math.pow(yy3 - yy1, 2));
    var bb = .5 * Math.sqrt(Math.pow(xx4 - xx2, 2) + Math.pow(yy4 - yy2, 2));

    var UU1 = (xx4 - xx2)/(2*bb);
    var VV1 = (yy1-yy3)/(2*aa);

    var WW1 = xZ - qq1;
    var WW2 = yZ - qq2;

    var xxabs = Math.abs(WW1*UU1);
    var yyabs = Math.abs(WW2*VV1);
            
    if((xxabs/bb) + (yyabs/aa) <= 1)
    {
        return true;
    }
    xx1 = x;
    yy1 = y;
    xx2 = x+22;
    yy2 = y-11;
    xx3 = x;
    yy3 = y-22;
    xx4 = x-22;
    yy4 = y-11;

    qq1 = .5 * (xx3 + xx1);
    qq2 = .5 * (yy3 + yy1);
    aa = .5 * Math.sqrt(Math.pow(xx3 - xx1, 2) + Math.pow(yy3 - yy1, 2));
    bb = .5 * Math.sqrt(Math.pow(xx4 - xx2, 2) + Math.pow(yy4 - yy2, 2));

    UU1 = (xx4 - xx2)/(2*bb);
    VV1 = (yy1-yy3)/(2*aa);

    WW1 = xZ + 22 - qq1;
    WW2 = yZ - 11 - qq2;

    xxabs = Math.abs(WW1*UU1);
    yyabs = Math.abs(WW2*VV1);
    
    if((xxabs/bb) + (yyabs/aa) <= 1)
    {
        return true;
    }
    if((xxabs/bb) + (yyabs/aa) <= 1)
    {
        return true;
    }
    xx1 = x;
    yy1 = y;
    xx2 = x+22;
    yy2 = y-11;
    xx3 = x;
    yy3 = y-22;
    xx4 = x-22;
    yy4 = y-11;

    qq1 = .5 * (xx3 + xx1);
    qq2 = .5 * (yy3 + yy1);
    aa = .5 * Math.sqrt(Math.pow(xx3 - xx1, 2) + Math.pow(yy3 - yy1, 2));
    bb = .5 * Math.sqrt(Math.pow(xx4 - xx2, 2) + Math.pow(yy4 - yy2, 2));

    UU1 = (xx4 - xx2)/(2*bb);
    VV1 = (yy1-yy3)/(2*aa);

    WW1 = xZ - 22 - qq1;
    WW2 = yZ - 11 - qq2;

    xxabs = Math.abs(WW1*UU1);
    yyabs = Math.abs(WW2*VV1);
    
    if((xxabs/bb) + (yyabs/aa) <= 1)
    {
        return true;
    }
    if((xxabs/bb) + (yyabs/aa) <= 1)
    {
        return true;
    }
    xx1 = x;
    yy1 = y;
    xx2 = x+22;
    yy2 = y-11;
    xx3 = x;
    yy3 = y-22;
    xx4 = x-22;
    yy4 = y-11;

    qq1 = .5 * (xx3 + xx1);
    qq2 = .5 * (yy3 + yy1);
    aa = .5 * Math.sqrt(Math.pow(xx3 - xx1, 2) + Math.pow(yy3 - yy1, 2));
    bb = .5 * Math.sqrt(Math.pow(xx4 - xx2, 2) + Math.pow(yy4 - yy2, 2));

    UU1 = (xx4 - xx2)/(2*bb);
    VV1 = (yy1-yy3)/(2*aa);

    WW1 = xZ - qq1;
    WW2 = yZ - 22 - qq2;

    xxabs = Math.abs(WW1*UU1);
    yyabs = Math.abs(WW2*VV1);
    
    if((xxabs/bb) + (yyabs/aa) <= 1)
    {
        return true;
    }
    return false;
}
function checkZombieCollisions(x, y)
{
    
    for(var i = 0; i < zomx.length; i++)
    {
        if(checkCollision(x, y, zomx[i], zomy[i]) === true)
        {
            return true;
        }
    }
}
function checkFront(y, yZ)
{
    if(y > yZ)
        return true;
}
function listOrder()
{
    list = [];
    var confirmed = false;
    for(var i = 0; i < zomy.length; i++)
    {
        list.push(i)
    }
    for(var i = 0; i < zomy.length; i++)
    {
        for(var j = i + 1; j < zomy.length; j++)
        {
            if(zomy[list[i]] > zomy[list[j]])
            {
                var hold = list[i];
                list[i] = list[j];
                list[j] = hold;
            }
        }
    }

    for(var i = 0; i < zomy.length; i++)
    {
        if(userY < zomy[list[i]])
        {
            list.splice(i, 0, -1);
            confirmed = true;
        }
    }
    
    if(confirmed === false)
    {
        list.push(-1);
    }
}
function drawZombieHead(x, y, wx, wy, h, face) 
{
    // left face
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - wx, y - wx * 0.5);
    ctx.lineTo(x - wx, y - h - wx * 0.5);
    ctx.lineTo(x, y - h * 1);
    ctx.closePath();
    ctx.fillStyle = "#78C165"; //#80461B
    ctx.strokeStyle = "7C9861";
    ctx.stroke();
    ctx.fill();

    

    // right face
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + wy, y - wy * 0.5);
    ctx.lineTo(x + wy, y - h - wy * 0.5);
    ctx.lineTo(x, y - h * 1);
    ctx.closePath();
    ctx.fillStyle = "#78C165"; // 
    ctx.strokeStyle = "7C9861"; //"#676744"
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
        ctx.fillStyle = "#55885A"; // 
        ctx.strokeStyle = "7C9861"; //"#676744"
        ctx.stroke();
        ctx.fill();

        // left face HAIR
        ctx.beginPath();
        ctx.moveTo(x, y - 18);
        ctx.lineTo(x - wx, y - wx * 0.5 - 18);
        ctx.lineTo(x - wx, y - h - wx * 0.5);
        ctx.lineTo(x, y - h * 1);
        ctx.closePath();
        ctx.fillStyle = "#55885A"; //#80461B
        ctx.strokeStyle = "7C9861";
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
           ctx.fillStyle = "#55885A"; // 
           ctx.strokeStyle = "7C9861"; //"#676744"
           ctx.stroke();
           ctx.fill();
   
           // left face HAIR
           ctx.beginPath();
           ctx.moveTo(x, y - 18);
           ctx.lineTo(x - wx, y - wx * 0.5);
           ctx.lineTo(x - wx, y - h - wx * 0.5);
           ctx.lineTo(x, y - h * 1);
           ctx.closePath();
           ctx.fillStyle = "#55885A"; //#80461B
           ctx.strokeStyle = "7C9861";
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
           ctx.fillStyle = "#55885A"; // 
           ctx.strokeStyle = "7C9861"; //"#676744"
           ctx.stroke();
           ctx.fill();
   
           // left face HAIR
           ctx.beginPath();
           ctx.moveTo(x, y);
           ctx.lineTo(x - wx, y - wx * 0.5-18);
           ctx.lineTo(x - wx, y - h - wx * 0.5);
           ctx.lineTo(x, y - h * 1);
           ctx.closePath();
           ctx.fillStyle = "#55885A"; //#80461B
           ctx.strokeStyle = "7C9861";
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
        ctx.fillStyle = "#55885A"; // 
        ctx.strokeStyle = "7C9861"; //"#676744"
        ctx.stroke();
        ctx.fill();

        // left face HAIR
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - wx, y - wx * 0.5);
        ctx.lineTo(x - wx, y - h - wx * 0.5);
        ctx.lineTo(x, y - h * 1);
        ctx.closePath();
        ctx.fillStyle = "#55885A"; //#80461B
        ctx.strokeStyle = "7C9861";
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
    ctx.fillStyle = "#55885A"; //"#D2B48C"
    ctx.strokeStyle = "7C9861"; 
    ctx.stroke();
    ctx.fill();      
}
function drawZombieChest(x, y, wx, wy, h) 
{
   // left face
   ctx.beginPath();
   ctx.moveTo(x, y);
   ctx.lineTo(x - wx, y - wx * 0.5);
   ctx.lineTo(x - wx, y - h - wx * 0.5);
   ctx.lineTo(x, y - h * 1);
   ctx.closePath();
   ctx.fillStyle = "#64484F"; //"#bda27e"
   ctx.strokeStyle = "#7C9861";
   ctx.stroke();
   ctx.fill();


   
   // right face
   ctx.beginPath();
   ctx.moveTo(x, y);
   ctx.lineTo(x + wy, y - wy * 0.5);
   ctx.lineTo(x + wy, y - h - wy * 0.5);
   ctx.lineTo(x, y - h * 1);
   ctx.closePath();
   ctx.fillStyle = "#64484F"; // "#a89070"
   ctx.strokeStyle = "#7C9861"; //"#676744"
   ctx.stroke();
   ctx.fill();

   // center face
   ctx.beginPath();
   ctx.moveTo(x, y - h);
   ctx.lineTo(x - wx, y - h - wx * 0.5);
   ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
   ctx.lineTo(x + wy, y - h - wy * 0.5);
   ctx.closePath();
   ctx.fillStyle = "#64484F";
   ctx.strokeStyle = "#7C9861"; 
   ctx.stroke();
   ctx.fill();      
}
function drawZombieArm(x, y, wx, wy, h) 
{
   // left face
   ctx.beginPath();
   ctx.moveTo(x, y);
   ctx.lineTo(x - wx, y - wx * 0.5);
   ctx.lineTo(x - wx, y - h - wx * 0.5);
   ctx.lineTo(x, y - h * 1);
   ctx.closePath();
   ctx.fillStyle = "#78C165";
   ctx.strokeStyle = "#7C9861";
   ctx.stroke();
   ctx.fill();

   // right face
   ctx.beginPath();
   ctx.moveTo(x, y);
   ctx.lineTo(x + wy, y - wy * 0.5);
   ctx.lineTo(x + wy, y - h - wy * 0.5);
   ctx.lineTo(x, y - h * 1);
   ctx.closePath();
   ctx.fillStyle = "#78C165"; // 
   ctx.strokeStyle = "#7C9861"; //"#676744"
   ctx.stroke();
   ctx.fill();

   // center face
   ctx.beginPath();
   ctx.moveTo(x, y - h);
   ctx.lineTo(x - wx, y - h - wx * 0.5);
   ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
   ctx.lineTo(x + wy, y - h - wy * 0.5);
   ctx.closePath();
   ctx.fillStyle = "#78C165";
   ctx.strokeStyle = "#7C9861"; 
   ctx.stroke();
   ctx.fill();      
}