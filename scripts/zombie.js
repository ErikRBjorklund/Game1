var zomx = [];
var zomy = [];
var zomface = [];
var zomhealth = [];
var timeSinceAttack = [];
var list = [];
function drawZombie(x, y, face)
{
    if(face === "sw")
    {
        drawZombieArm(x - 12, y + 5, 5, 5, 10);
        drawZombieChest(x- 2, y + 25, 15, 15, 30);
        drawZombieArm(x + 8, y + 15, 5, 5, 10);
        drawZombieHead(x, y, 22, 22, 22, "sw");
    }
    if(face === "se")
    {
        drawZombieArm2(x + 8, y + 6, 5, 5, 10);
        drawZombieChest(x- 2, y + 25, 15, 15, 30);
        drawZombieArm2(x - 12, y + 15, 5, 5, 10);
        drawZombieHead(x, y, 22, 22, 22, "se");
    }
    if(face === "nw")
    {
        drawZombieChest(x- 2, y + 25, 15, 15, 30);
        drawZombieArm2(x - 20, y + 10, 5, 5, 10);
        drawZombieHead(x, y, 22, 22, 22, "nw");
    }
    if(face === "ne")
    {
        drawZombieChest(x- 2, y + 25, 15, 15, 30);
        drawZombieArm(x + 16, y + 10, 5, 5, 10);
        drawZombieHead(x, y, 22, 22, 22, "ne");
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
function closestCollision(x, y, xZ, yZ)
{
    var holder = 1000;
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

    if((xxabs/bb) + (yyabs/aa) <= holder)
    {
        holder = (xxabs/bb) + (yyabs/aa);
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

    if((xxabs/bb) + (yyabs/aa) <= holder)
    {
        holder = (xxabs/bb) + (yyabs/aa);
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

    if((xxabs/bb) + (yyabs/aa) <= holder)
    {
        holder = (xxabs/bb) + (yyabs/aa);
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

    if((xxabs/bb) + (yyabs/aa) <= holder)
    {
        holder = (xxabs/bb) + (yyabs/aa);
    }
    return holder;
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
    listBulletOrder();
    var count = 0;
    for(var i = 0; i < list.length; i++)
    {
        for(var j = count; j < bullety.length; j++)
        {
            if(list[i] === -1)
            {
                if(bullety[j] <= userY + 30)
                {
                    list.splice(i, 0, -2);
                    count++;
                    /*
                    console.log("userY: " + userY);
                    console.log("bulletY: " + bullety[j]);
                    */
                }
            }
            else if(bullety[j] <= zomy[list[i]] + 30)
            {
                list.splice(i, 0, -2);
                count++;
            }
        }
    }
    if(count != bullety.length)
    {
        for(var i = 0; i < bullety.length - count; i++)
        {
            list.push(-2);
        }
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
    ctx.moveTo(x - 8, y);
    ctx.lineTo(x - 13, y - h  +7);
    ctx.lineTo(x - 13, y - h + 1);

    ctx.lineTo(x - 8, y - h + 5);

    ctx.closePath();
    ctx.fillStyle = "#78C165";
    ctx.strokeStyle = "#7C9861";
    ctx.stroke();
    ctx.fill();

    // right face
    ctx.beginPath();
    ctx.moveTo(x - 8, y);
    ctx.lineTo(x + wy, y - wy * 0.5 -4);
    ctx.lineTo(x + wy, y - h - wy * 0.5);
    ctx.lineTo(x - 8, y - h + 4);
    ctx.closePath();
    ctx.fillStyle = "#78C165"; //
    ctx.strokeStyle = "#7C9861"; //"#676744"
    ctx.stroke();
    ctx.fill();

    // center face
    ctx.beginPath();
    ctx.moveTo(x - 8, y - h + 4);
    ctx.lineTo(x - 12, y - h + 1);
    ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
    ctx.lineTo(x + wy, y - h - wy * 0.5);
    ctx.closePath();
    ctx.fillStyle = "#78C165";
    ctx.strokeStyle = "#7C9861";
    ctx.stroke();
    ctx.fill();

}
function drawZombieArm2(x, y, wx, wy, h)
{

    // left face
    ctx.beginPath();
    ctx.moveTo(x + 8, y);
    ctx.lineTo(x + 13, y - h  +7);
    ctx.lineTo(x + 13, y - h + 1);

    ctx.lineTo(x + 8, y - h + 5);

    ctx.closePath();
    ctx.fillStyle = "#78C165";
    ctx.strokeStyle = "#7C9861";
    ctx.stroke();
    ctx.fill();

    // right face
    ctx.beginPath();
    ctx.moveTo(x + 8, y);
    ctx.lineTo(x - wy, y - wy * 0.5 -4);
    ctx.lineTo(x - wy, y - h - wy * 0.5);
    ctx.lineTo(x + 8, y - h + 4);
    ctx.closePath();
    ctx.fillStyle = "#78C165"; //
    ctx.strokeStyle = "#7C9861"; //"#676744"
    ctx.stroke();
    ctx.fill();

    // center face
    ctx.beginPath();
    ctx.moveTo(x + 8, y - h + 4);
    ctx.lineTo(x + 12, y - h + 1);
    ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
    ctx.lineTo(x - wy, y - h - wy * 0.5);
    ctx.closePath();
    ctx.fillStyle = "#78C165";
    ctx.strokeStyle = "#7C9861";
    ctx.stroke();
    ctx.fill();

}

function implementAI()
{
    for(var i = 0; i < zomx.length; i++)
    {
        zombieAI(i, i);
    }
}

function zombieAI(zombxCoord, zombyCoord)
{
    chase(zombxCoord, zombyCoord);
    zombieAttack(zombxCoord, zombyCoord);
}
function chase(arrPosX, arrPosY)
{
    if(checkCollision(userX, userY, zomx[arrPosX], zomy[arrPosY]) === false)
    {
        if(closestCollision(userX, userY, zomx[arrPosX] + 1, zomy[arrPosY] - .5) < closestCollision(userX, userY, zomx[arrPosX] - 1, zomy[arrPosY] - .5) && closestCollision(userX, userY, zomx[arrPosX] + 1, zomy[arrPosY] - .5) < closestCollision(userX, userY, zomx[arrPosX] - 1, zomy[arrPosY] + .5) && closestCollision(userX, userY, zomx[arrPosX] + 1, zomy[arrPosY] - .5) < closestCollision(userX, userY, zomx[arrPosX] + 1, zomy[arrPosY] + .5))
        {
            if(closestCollision(userX, userY, zomx[arrPosX] + 1, zomy[arrPosY] - .5) > 1)
            {
                var isTrue = false;
                for(var i = 0; i < zomx.length; i++)
                {
                    if(i != arrPosX)
                    {
                        if(checkCollision(zomx[arrPosX] + 1, zomy[arrPosY] - .5, zomx[i], zomy[i]) === true)
                        {
                            isTrue = true;
                        }
                    }
                }
                if(isTrue === false)
                {
                    zomx[arrPosX] += .5;
                    zomy[arrPosY] -= .25;
                    zomface[arrPosX] = "ne";
                }
            }
        }
        else if(closestCollision(userX, userY, zomx[arrPosX] - 1, zomy[arrPosY] - .5) < closestCollision(userX, userY, zomx[arrPosX] + 1, zomy[arrPosY] - .5) && closestCollision(userX, userY, zomx[arrPosX] - 1, zomy[arrPosY] - .5) < closestCollision(userX, userY, zomx[arrPosX] - 1, zomy[arrPosY] + .5) && closestCollision(userX, userY, zomx[arrPosX] - 1, zomy[arrPosY] - .5) < closestCollision(userX, userY, zomx[arrPosX] + 1, zomy[arrPosY] + .5))
        {
            if(closestCollision(userX, userY, zomx[arrPosX] - 1, zomy[arrPosY] - .5) > 1)
            {
                var isTrue = false;
                for(var i = 0; i < zomx.length; i++)
                {
                    if(i != arrPosX)
                    {
                        if(checkCollision(zomx[arrPosX] - 1, zomy[arrPosY] - .5, zomx[i], zomy[i]) === true)
                        {
                            isTrue = true;
                        }
                    }
                }
                if(isTrue === false)
                {
                    zomx[arrPosX] -= .5;
                    zomy[arrPosY] -= .25;
                    zomface[arrPosX] = "nw";
                }
            }
        }
        else if(closestCollision(userX, userY, zomx[arrPosX] - 1, zomy[arrPosY] + .5) < closestCollision(userX, userY, zomx[arrPosX] + 1, zomy[arrPosY] - .5) && closestCollision(userX, userY, zomx[arrPosX] - 1, zomy[arrPosY] + .5) < closestCollision(userX, userY, zomx[arrPosX] - 1, zomy[arrPosY] - .5) && closestCollision(userX, userY, zomx[arrPosX] - 1, zomy[arrPosY] + .5) < closestCollision(userX, userY, zomx[arrPosX] + 1, zomy[arrPosY] + .5))
        {
            if(closestCollision(userX, userY, zomx[arrPosX] - 1, zomy[arrPosY] + .5) > 1)
            {
                var isTrue = false;
                for(var i = 0; i < zomx.length; i++)
                {
                    if(i != arrPosX)
                    {
                        if(checkCollision(zomx[arrPosX] - 1, zomy[arrPosY] + .5, zomx[i], zomy[i]) === true)
                        {
                            isTrue = true;
                        }
                    }
                }
                if(isTrue === false)
                {
                    zomx[arrPosX] -= .5;
                    zomy[arrPosY] += .25;
                    zomface[arrPosX] = "sw";
                }
            }
        }
        else if(closestCollision(userX, userY, zomx[arrPosX] + 1, zomy[arrPosY] + .5) < closestCollision(userX, userY, zomx[arrPosX] + 1, zomy[arrPosY] - .5) && closestCollision(userX, userY, zomx[arrPosX] + 1, zomy[arrPosY] + .5) < closestCollision(userX, userY, zomx[arrPosX] - 1, zomy[arrPosY] - .5) && closestCollision(userX, userY, zomx[arrPosX] + 1, zomy[arrPosY] + .5) < closestCollision(userX, userY, zomx[arrPosX] - 1, zomy[arrPosY] + .5))
        {
            if(closestCollision(userX, userY, zomx[arrPosX] + 1, zomy[arrPosY] + .5) > 1)
            {
                var isTrue = false;
                for(var i = 0; i < zomx.length; i++)
                {
                    if(i != arrPosX)
                    {
                        if(checkCollision(zomx[arrPosX] + 1, zomy[arrPosY] + .5, zomx[i], zomy[i]) === true)
                        {
                            isTrue = true;
                        }
                    }
                }
                if(isTrue === false)
                {
                    zomx[arrPosX] += .5;
                    zomy[arrPosY] += .25;
                    zomface[arrPosX] = "se";
                }
            }
        }
        else if(userX === zomx[arrPosX])
        {
            if(userY > zomy[arrPosY])
            {
                var isTrue = false;
                for(var i = 0; i < zomx.length; i++)
                {
                    if(i != arrPosX)
                    {
                        if(checkCollision(zomx[arrPosX], zomy[arrPosY] + 1, zomx[i], zomy[i]) === true)
                        {
                            isTrue = true;
                        }
                    }
                }
                if(isTrue === false)
                {
                    zomy[arrPosY] += .5;
                    zomface[arrPosX] = "se";
                }
            }
            if(userY < zomy[arrPosY])
            {

                var isTrue = false;
                for(var i = 0; i < zomx.length; i++)
                {
                    if(i != arrPosX)
                    {
                        if(checkCollision(zomx[arrPosX], zomy[arrPosY] - 1, zomx[i], zomy[i]) === true)
                        {
                            isTrue = true;
                        }
                    }
                }
                if(isTrue === false)
                {
                    zomy[arrPosY] -= .5;
                    zomface[arrPosX] = "nw";
                }
            }
        }
        else if(userY === zomy[arrPosY])
        {
            if(userX > zomx[arrPosX])
            {
                var isTrue = false;
                for(var i = 0; i < zomx.length; i++)
                {
                    if(i != arrPosX)
                    {
                        if(checkCollision(zomx[arrPosX] + 2, zomy[arrPosY], zomx[i], zomy[i]) === true)
                        {
                            isTrue = true;
                        }
                    }
                }
                if(isTrue === false)
                {
                    zomx[arrPosX] += 1;
                    zomface[arrPosX] = "se";
                }
            }
            if(userX < zomx[arrPosX])
            {
                if(userX > zomx[arrPosX])
                {
                    var isTrue = false;
                    for(var i = 0; i < zomx.length; i++)
                    {
                        if(i != arrPosX)
                        {
                            if(checkCollision(zomx[arrPosX] - 2, zomy[arrPosY], zomx[i], zomy[i]) === true)
                            {
                                isTrue = true;
                            }
                        }
                    }
                    if(isTrue === false)
                    {
                        zomx[arrPosX] -= 1;
                        zomface[arrPosX] = "nw";
                    }
                }
            }
        }

    }
}
function hitByBullet()
{
    for(var i = 0; i < zomx.length; i++)
    {
        for(var j = 0; j < bulletx.length; j++)
        {
            if(bulletCollision(j, i) === true)
            {
                zomhealth[i] -= 14;
                bulletx.splice(j, 1);
                bullety.splice(j, 1);
                bulletd.splice(j, 1);
                j--;
                break;
            }
        }
    }
}
function checkZombieHealth()
{
    for(var i = 0; i < zomhealth.length; i++)
    {
        if(zomhealth[i] <= 0)
        {
            zomx.splice(i, 1);
            zomy.splice(i, 1);
            zomface.splice(i, 1);
            zomhealth.splice(i, 1);
            i--;
            score += 20;
        }
    }
}
function addZombie(x, y, face, hp)
{
    zomx.push(x);
    zomy.push(y);
    zomface.push(face);
    zomhealth.push(hp);
    timeSinceAttack.push(1000);
}
function attackPlayer()
{
    playerHealth -= 4;
}
function zombieAttack(zombxCoord, zombyCoord)
{
    if(checkCollision(userX, userY, zomx[zombxCoord] + 2, zomy[zombyCoord] + 1) === true && timeSinceAttack[zombxCoord] >= 1000)
    {
        timeSinceAttack[zombxCoord] = 0;
        attackPlayer();
    }
    else if(checkCollision(userX, userY, zomx[zombxCoord] - 2, zomy[zombyCoord] + 1) === true && timeSinceAttack[zombxCoord] >= 1000)
    {
        timeSinceAttack[zombxCoord] = 0;
        attackPlayer();
    }
    else if(checkCollision(userX, userY, zomx[zombxCoord] + 2, zomy[zombyCoord] - 1) === true && timeSinceAttack[zombxCoord] >= 1000)
    {
        timeSinceAttack[zombxCoord] = 0;
        attackPlayer();
    }
    else if(checkCollision(userX, userY, zomx[zombxCoord] - 2, zomy[zombyCoord] - 1) === true && timeSinceAttack[zombxCoord] >= 1000)
    {
        timeSinceAttack[zombxCoord] = 0;
        attackPlayer();
    }
}
function allZombiesAttack()
{
    for(var i = 0; i < zombx.length; i++)
    {
        zombieAttack(i, i);
    }
}
function addtimeSinceLastAttack()
{
    for(var i = 0; i < zomx.length; i++)
    {
        timeSinceAttack[i] += 10;
    }
}
function drawZombieHealth()
{
    for(var i = 0; i < zomhealth.length; i++)
    {
        ctx.beginPath();
        ctx.rect(zomx[i] - 20, zomy[i] - 60, 40, 5)
        ctx.closePath();
        ctx.fillStyle = "red"; //"#bda27e"
        ctx.fill();

        ctx.beginPath();
        ctx.rect(zomx[i] - 20, zomy[i] - 60, zomhealth[i], 5)
        ctx.closePath();
        ctx.fillStyle = "green"; //"#bda27e"
        ctx.fill();
    }
}
