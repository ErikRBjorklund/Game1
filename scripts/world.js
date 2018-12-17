// TODO: Generate these automatically rather than as literals
var world = [[0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0]];
var world2 = [[false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false]];
function genWorld()
{
    for(var i = 0; i < world.length; i++)
    {
        for(var j = 0; j < world[i].length; j++)
        {
            world[j][i] = getRandomInt(0, 1);
        }
    }
}
function playerLocation()
{
    for(var i = 0; i < 9; i++)              // i is y, j is x
    {
        for(var j = 0; j < 9; j++)
        {
            world2[j][i] = false;
            var ychange = -25;
            var xchange = 0;
            var x1 = 40 * (i) - 40 * (j) + 480 + xchange;
            var y1 = 20 * (i) + 20 * (j) + 200 + ychange;
            var x2 = 40 * (i) - 40 * (j) + 440 + xchange;
            var y2 = 20 * (i) + 20 * (j) + 180 + ychange;
            var x3 = 40 * (i) - 40 * (j) + 480 + xchange;
            var y3 = 20 * (i) + 20 * (j) + 160 + ychange;
            var x4 = 40 * (i) - 40 * (j) + 520 + xchange;
            var y4 = 20 * (i) + 20 * (j) + 180 + ychange;

            var q1 = .5 * (x3 + x1);
            var q2 = .5 * (y3 + y1);
            var a = .5 * Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2));
            var b = .5 * Math.sqrt(Math.pow(x4 - x2, 2) + Math.pow(y4 - y2, 2));

            var U1 = (x4 - x2)/(2*b);
            var V1 = (y1-y3)/(2*a);

            var W1 = userX - q1;
            var W2 = userY - q2;

            var xabs = Math.abs(W1*U1);
            var yabs = Math.abs(W2*V1);

            if((xabs/b) + (yabs/a) <= 1)
            {
                world2[j][i] = true;
            }

            ychange = -18;
            xchange = 15;
            x1 = 40 * (i) - 40 * (j) + 480 + xchange;
            y1 = 20 * (i) + 20 * (j) + 200 + ychange;
            x2 = 40 * (i) - 40 * (j) + 440 + xchange;
            y2 = 20 * (i) + 20 * (j) + 180 + ychange;
            x3 = 40 * (i) - 40 * (j) + 480 + xchange;
            y3 = 20 * (i) + 20 * (j) + 160 + ychange;
            x4 = 40 * (i) - 40 * (j) + 520 + xchange;
            y4 = 20 * (i) + 20 * (j) + 180 + ychange;

            q1 = .5 * (x3 + x1);
            q2 = .5 * (y3 + y1);
            a = .5 * Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2));
            b = .5 * Math.sqrt(Math.pow(x4 - x2, 2) + Math.pow(y4 - y2, 2));

            U1 = (x4 - x2)/(2*b);
            V1 = (y1-y3)/(2*a);

            W1 = userX - q1;
            W2 = userY - q2;

            xabs = Math.abs(W1*U1);
            yabs = Math.abs(W2*V1);

            if((xabs/b) + (yabs/a) <= 1)
            {
                world2[j][i] = true;
            }

            ychange = -18;
            xchange = -15;
            x1 = 40 * (i) - 40 * (j) + 480 + xchange;
            y1 = 20 * (i) + 20 * (j) + 200 + ychange;
            x2 = 40 * (i) - 40 * (j) + 440 + xchange;
            y2 = 20 * (i) + 20 * (j) + 180 + ychange;
            x3 = 40 * (i) - 40 * (j) + 480 + xchange;
            y3 = 20 * (i) + 20 * (j) + 160 + ychange;
            x4 = 40 * (i) - 40 * (j) + 520 + xchange;
            y4 = 20 * (i) + 20 * (j) + 180 + ychange;

            q1 = .5 * (x3 + x1);
            q2 = .5 * (y3 + y1);
            a = .5 * Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2));
            b = .5 * Math.sqrt(Math.pow(x4 - x2, 2) + Math.pow(y4 - y2, 2));

            U1 = (x4 - x2)/(2*b);
            V1 = (y1-y3)/(2*a);

            W1 = userX - q1;
            W2 = userY - q2;

            xabs = Math.abs(W1*U1);
            yabs = Math.abs(W2*V1);

            if((xabs/b) + (yabs/a) <= 1)
            {
                world2[j][i] = true;
            }


            ychange = -11;
            xchange = 0;
            x1 = 40 * (i) - 40 * (j) + 480 + xchange;
            y1 = 20 * (i) + 20 * (j) + 200 + ychange;
            x2 = 40 * (i) - 40 * (j) + 440 + xchange;
            y2 = 20 * (i) + 20 * (j) + 180 + ychange;
            x3 = 40 * (i) - 40 * (j) + 480 + xchange;
            y3 = 20 * (i) + 20 * (j) + 160 + ychange;
            x4 = 40 * (i) - 40 * (j) + 520 + xchange;
            y4 = 20 * (i) + 20 * (j) + 180 + ychange;

            q1 = .5 * (x3 + x1);
            q2 = .5 * (y3 + y1);
            a = .5 * Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2));
            b = .5 * Math.sqrt(Math.pow(x4 - x2, 2) + Math.pow(y4 - y2, 2));

            U1 = (x4 - x2)/(2*b);
            V1 = (y1-y3)/(2*a);

            W1 = userX - q1;
            W2 = userY - q2;

            xabs = Math.abs(W1*U1);
            yabs = Math.abs(W2*V1);

            if((xabs/b) + (yabs/a) <= 1)
            {
                world2[j][i] = true;
            }

        }
    }
}
function drawWorld()
{
    for(var i = 0; i < world.length; i++)
    {
        for(var j = 0; j < world[i].length; j++)
        {
            if(world[j][i] === 0)
                drawGrass(i * 40  - j * 40 + 480, j*20 + i*20 + 240, 40, 40, 40);
            if(world[j][i] === 1)
                drawSand(i * 40  - j * 40 + 480, j*20 + i*20 + 240, 40, 40, 40);
            /*
            if(world2[j][i] === true)
            {
                drawPlayerTop(i * 40  - j * 40 + 480, j*20 + i*20 + 240, 40, 40, 40);
            }*/
        }
    }
}
function drawSand(x, y, wx, wy, h)
{
    // left face
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - wx, y - wx * 0.5);
    ctx.lineTo(x - wx, y - h - wx * 0.5);
    ctx.lineTo(x, y - h * 1);
    ctx.closePath();
    ctx.fillStyle = "#838357";
    ctx.strokeStyle = "#7a7a51"; //"#7a7a51"
    ctx.stroke();
    ctx.fill();

    // right face
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + wy, y - wy * 0.5);
    ctx.lineTo(x + wy, y - h - wy * 0.5);
    ctx.lineTo(x, y - h * 1);
    ctx.closePath();
    ctx.fillStyle = "#6f6f49";
    ctx.strokeStyle = "#676744"; //"#676744"
    ctx.stroke();
    ctx.fill();

    // center face
    ctx.beginPath();
    ctx.moveTo(x, y - h);       //x1
    ctx.lineTo(x - wx, y - h - wx * 0.5);       //x2
    ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5)); //x3
    ctx.lineTo(x + wy, y - h - wy * 0.5);       //x4
    ctx.closePath();
    ctx.fillStyle = "#989865";
    ctx.strokeStyle = "#8e8e5e"; //"#464340"
    ctx.stroke();
    ctx.fill();
}
function drawGrass(x, y, wx, wy, h)
{
    // left face
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - wx, y - wx * 0.5);
    ctx.lineTo(x - wx, y - h - wx * 0.5);
    ctx.lineTo(x, y - h * 1);
    ctx.closePath();
    ctx.fillStyle = "#46523C";
    ctx.strokeStyle = "#293A18";
    ctx.stroke();
    ctx.fill();

    // right face
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + wy, y - wy * 0.5);
    ctx.lineTo(x + wy, y - h - wy * 0.5);
    ctx.lineTo(x, y - h * 1);
    ctx.closePath();
    ctx.fillStyle = "#3D5229"; //
    ctx.strokeStyle = "#293A18"; //"#676744"
    ctx.stroke();
    ctx.fill();

    // center face
    ctx.beginPath();
    ctx.moveTo(x, y - h);
    ctx.lineTo(x - wx, y - h - wx * 0.5);
    ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
    ctx.lineTo(x + wy, y - h - wy * 0.5);
    ctx.closePath();
    ctx.fillStyle = "#3B5323";
    ctx.strokeStyle = "#293A18";
    ctx.stroke();
    ctx.fill();
}
function drawPlayerTop(x, y, wx, wy, h)
{
    ctx.beginPath();
    ctx.moveTo(x, y - h);
    ctx.lineTo(x - wx, y - h - wx * 0.5);
    ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
    ctx.lineTo(x + wy, y - h - wy * 0.5);
    ctx.closePath();
    ctx.fillStyle = "blue";

    ctx.strokeStyle = "#464340"; //"#8e8e5e"
    ctx.stroke();
    ctx.fill();
}
function drawAll()
{
    listOrder();
    var count = 0;
    for(var i = 0; i < list.length; i++)
    {
        if(list[i] >= 0)
        {
            drawZombie(zomx[list[i]], zomy[list[i]], zomface[list[i]]);
        }
        if(list[i] === -1)
        {
            drawPlayer1(userX, userY, facing);
        }
        if(list[i] === -2)
        {
            drawBullet(bulletx[count], bullety[count], 5, 5, 5);
            count++;
        }
    }
}
function isPlayerOffBoard(x, y)
{
    var ychange = -25;
    var xchange = 0;
    var x1 = 480 + xchange;
    var y1 = 160 + ychange;
    var x2 = 840 + xchange;
    var y2 = 360 + ychange;
    var x3 = 480 + xchange;
    var y3 = 520 + ychange;
    var x4 = 120 + xchange;
    var y4 = 360 + ychange;

    var q1 = .5 * (x3 + x1);
    var q2 = .5 * (y3 + y1);
    var a = .5 * Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2));
    var b = .5 * Math.sqrt(Math.pow(x4 - x2, 2) + Math.pow(y4 - y2, 2));

    var U1 = (x4 - x2)/(2*b);
    var V1 = (y1-y3)/(2*a);

    var W1 = x - q1;
    var W2 = y - q2;

    var xabs = Math.abs(W1*U1);
    var yabs = Math.abs(W2*V1);

    if((xabs/b) + (yabs/a) > 1)
    {
        return true;
    }

    ychange = -18;
    xchange = 15;
    x1 = 480 + xchange;
    y1 = 160 + ychange;
    x2 = 840 + xchange;
    y2 = 360 + ychange;
    x3 = 480 + xchange;
    y3 = 520 + ychange;
    x4 = 120 + xchange;
    y4 = 360 + ychange;

    q1 = .5 * (x3 + x1);
    q2 = .5 * (y3 + y1);
    a = .5 * Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2));
    b = .5 * Math.sqrt(Math.pow(x4 - x2, 2) + Math.pow(y4 - y2, 2));

    U1 = (x4 - x2)/(2*b);
    V1 = (y1-y3)/(2*a);

    W1 = x +  - q1;
    W2 = y - q2;

    xabs = Math.abs(W1*U1);
    yabs = Math.abs(W2*V1);

    if((xabs/b) + (yabs/a) > 1)
    {
        return true;
    }

    ychange = -18;
    xchange = -15;
    x1 = 480 + xchange;
    y1 = 160 + ychange;
    x2 = 840 + xchange;
    y2 = 360 + ychange;
    x3 = 480 + xchange;
    y3 = 520 + ychange;
    x4 = 120 + xchange;
    y4 = 360 + ychange;

    q1 = .5 * (x3 + x1);
    q2 = .5 * (y3 + y1);
    a = .5 * Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2));
    b = .5 * Math.sqrt(Math.pow(x4 - x2, 2) + Math.pow(y4 - y2, 2));

    U1 = (x4 - x2)/(2*b);
    V1 = (y1-y3)/(2*a);

    W1 = x +  - q1;
    W2 = y - q2;

    xabs = Math.abs(W1*U1);
    yabs = Math.abs(W2*V1);

    if((xabs/b) + (yabs/a) > 1)
    {
        return true;
    }

    ychange = -11;
    xchange = 0;
    x1 = 480 + xchange;
    y1 = 160 + ychange;
    x2 = 840 + xchange;
    y2 = 360 + ychange;
    x3 = 480 + xchange;
    y3 = 520 + ychange;
    x4 = 120 + xchange;
    y4 = 360 + ychange;

    q1 = .5 * (x3 + x1);
    q2 = .5 * (y3 + y1);
    a = .5 * Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2));
    b = .5 * Math.sqrt(Math.pow(x4 - x2, 2) + Math.pow(y4 - y2, 2));

    U1 = (x4 - x2)/(2*b);
    V1 = (y1-y3)/(2*a);

    W1 = x +  - q1;
    W2 = y - q2;

    xabs = Math.abs(W1*U1);
    yabs = Math.abs(W2*V1);

    if((xabs/b) + (yabs/a) > 1)
    {
        return true;
    }
    return false;
}
