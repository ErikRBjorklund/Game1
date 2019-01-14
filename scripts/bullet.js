var bulletx = [];
var bullety = [];
var bulletd = [];

function drawBullet(x, y, wx, wy, h)
{
    // left face
    ctx.beginPath();
    ctx.moveTo(x, y - 25);
    ctx.lineTo(x - wx, y - wx * 0.5 - 25);
    ctx.lineTo(x - wx, y - h - wx * 0.5 - 25);
    ctx.lineTo(x, y - h * 1 - 25);
    ctx.closePath();
    ctx.fillStyle = "#484848"; //"#bda27e"
    ctx.strokeStyle = "#202020";
    ctx.stroke();
    ctx.fill();



    // right face
    ctx.beginPath();
    ctx.moveTo(x, y - 25);
    ctx.lineTo(x + wy, y - wy * 0.5 - 25);
    ctx.lineTo(x + wy, y - h - wy * 0.5 - 25);
    ctx.lineTo(x, y - h * 1 - 25);
    ctx.closePath();
    ctx.fillStyle = "#484848"; // "#a89070"
    ctx.strokeStyle = "#202020"; //"#676744"
    ctx.stroke();
    ctx.fill();

    // center face
    ctx.beginPath();
    ctx.moveTo(x, y - h - 25);
    ctx.lineTo(x - wx, y - h - wx * 0.5 - 25);
    ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5) - 25);
    ctx.lineTo(x + wy, y - h - wy * 0.5 - 25);
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
function addBullet(x, y, direction)
{
    if(direction === "sw")
    {
        bulletx.push(x - 15);
        bullety.push(y + 55);
        bulletd.push(direction);
    }
    else if(direction === "se")
    {
        bulletx.push(x + 15);
        bullety.push(y + 55);
        bulletd.push(direction);
    }
    else if(direction === "nw")
    {
        bulletx.push(x - 25);
        bullety.push(y + 35);
        bulletd.push(direction);
    }
    else if(direction === "ne")
    {
        bulletx.push(x + 25);
        bullety.push(y + 35);
        bulletd.push(direction);
    }
}
function moveBullet(arrPos)
{
    var xSpeed = 4;
    var ySpeed = 2;
    if(bulletd[arrPos] === "nw")
    {
        bulletx[arrPos] -= xSpeed;
        bullety[arrPos] -= ySpeed;
    }
    if(bulletd[arrPos] === "sw")
    {
        bulletx[arrPos] -= xSpeed;
        bullety[arrPos] += ySpeed;
    }
    if(bulletd[arrPos] === "ne")
    {
        bulletx[arrPos] += xSpeed;
        bullety[arrPos] -= ySpeed;
    }
    if(bulletd[arrPos] === "se")
    {
        bulletx[arrPos] += xSpeed;
        bullety[arrPos] += ySpeed;
    }
}
function listBulletOrder()
{
    for(var i = 0; i < bullety.length; i++)
    {
        for(var j = i + 1; j < bullety.length; j++)
        {
            if(bullety[i] > bullety[j])
            {
                var hold = bullety[i];
                bullety[i] = bullety[j];
                bullety[j] = hold;
                hold = bulletx[i];
                bulletx[i] = bulletx[j];
                bulletx[j] = hold;
                hold = bulletd[i];
                bulletd[i] = bulletd[j];
                bulletd[j] = hold;
            }
        }
    }
}
function bulletCollision(bullArrPos, zomArrPos)
{
    var ychange = -4;
    var xchange = 0;
    var x1 = zomx[zomArrPos] + xchange;
    var y1 = zomy[zomArrPos] + ychange;
    var x2 = zomx[zomArrPos] + 20 + xchange;
    var y2 = zomy[zomArrPos] - 10 + ychange;
    var x3 = zomx[zomArrPos] + xchange;
    var y3 = zomy[zomArrPos] - 20 + ychange;
    var x4 = zomx[zomArrPos] - 20 + xchange;
    var y4 = zomy[zomArrPos] - 10 + ychange;

    var q1 = .5 * (x3 + x1);
    var q2 = .5 * (y3 + y1);
    var a = .5 * Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2));
    var b = .5 * Math.sqrt(Math.pow(x4 - x2, 2) + Math.pow(y4 - y2, 2));

    var U1 = (x4 - x2)/(2*b);
    var V1 = (y1 - y3)/(2*a);

    var W1 = bulletx[bullArrPos] - q1;
    var W2 = bullety[bullArrPos] - 40 - q2;

    var xabs = Math.abs(W1*U1);
    var yabs = Math.abs(W2*V1);

    if((xabs/b) + (yabs/a) <= 1)
    {
        return true;
    }
    ychange = -1.5;
    xchange = 12.5;
    x1 = zomx[zomArrPos] + xchange;
    y1 = zomy[zomArrPos] + ychange;
    x2 = zomx[zomArrPos] + 20 + xchange;
    y2 = zomy[zomArrPos] - 10 + ychange;
    x3 = zomx[zomArrPos] + xchange;
    y3 = zomy[zomArrPos] - 20 + ychange;
    x4 = zomx[zomArrPos] - 20 + xchange;
    y4 = zomy[zomArrPos] - 10 + ychange;

    q1 = .5 * (x3 + x1);
    q2 = .5 * (y3 + y1);
    a = .5 * Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2));
    b = .5 * Math.sqrt(Math.pow(x4 - x2, 2) + Math.pow(y4 - y2, 2));

    U1 = (x4 - x2)/(2*b);
    V1 = (y1 - y3)/(2*a);

    W1 = bulletx[bullArrPos] - q1;
    W2 = bullety[bullArrPos] - 40 - q2;

    xabs = Math.abs(W1*U1);
    yabs = Math.abs(W2*V1);

    if((xabs/b) + (yabs/a) <= 1)
    {
        return true;
    }

    ychange = -1.5;
    xchange = -12.5;
    x1 = zomx[zomArrPos] + xchange;
    y1 = zomy[zomArrPos] + ychange;
    x2 = zomx[zomArrPos] + 20 + xchange;
    y2 = zomy[zomArrPos] - 10 + ychange;
    x3 = zomx[zomArrPos] + xchange;
    y3 = zomy[zomArrPos] - 20 + ychange;
    x4 = zomx[zomArrPos] - 20 + xchange;
    y4 = zomy[zomArrPos] - 10 + ychange;

    q1 = .5 * (x3 + x1);
    q2 = .5 * (y3 + y1);
    a = .5 * Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2));
    b = .5 * Math.sqrt(Math.pow(x4 - x2, 2) + Math.pow(y4 - y2, 2));

    U1 = (x4 - x2)/(2*b);
    V1 = (y1 - y3)/(2*a);

    W1 = bulletx[bullArrPos] - q1;
    W2 = bullety[bullArrPos] - 40 - q2;

    xabs = Math.abs(W1*U1);
    yabs = Math.abs(W2*V1);

    if((xabs/b) + (yabs/a) <= 1)
    {
        return true;
    }

    ychange = 1;
    xchange = 0;
    x1 = zomx[zomArrPos] + xchange;
    y1 = zomy[zomArrPos] + ychange;
    x2 = zomx[zomArrPos] + 20 + xchange;
    y2 = zomy[zomArrPos] - 10 + ychange;
    x3 = zomx[zomArrPos] + xchange;
    y3 = zomy[zomArrPos] - 20 + ychange;
    x4 = zomx[zomArrPos] - 20 + xchange;
    y4 = zomy[zomArrPos] - 10 + ychange;

    q1 = .5 * (x3 + x1);
    q2 = .5 * (y3 + y1);
    a = .5 * Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2));
    b = .5 * Math.sqrt(Math.pow(x4 - x2, 2) + Math.pow(y4 - y2, 2));

    U1 = (x4 - x2)/(2*b);
    V1 = (y1 - y3)/(2*a);

    W1 = bulletx[bullArrPos] - q1;
    W2 = bullety[bullArrPos] - 40 - q2;

    xabs = Math.abs(W1*U1);
    yabs = Math.abs(W2*V1);

    if((xabs/b) + (yabs/a) <= 1)
    {
        return true;
    }

    return false;



}
function moveAllBullets()
{
    for(var i = 0; i < bulletx.length; i++)
    {
        moveBullet(i);
    }
}
function removeOffscreenBullets()
{
    for(var i = 0; i < bulletx.length; i++)
    {
        if(bulletx[i] > 1000 || bulletx[i] < -20 || bullety[i] < -20 || bullety[i] > 700)
        {

            bulletx.splice(i, 1);
            bullety.splice(i, 1);
            bulletd.splice(i, 1);
            i--;
        }
    }
}
