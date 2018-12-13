window.onload = initAll;

var canvas;
var ctx;





var world = [[0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0]];  
var userX = 0;
var userY = 0;
function initAll()
{
    canvas = document.getElementById("myCanvas");       //element it's in
    ctx = canvas.getContext("2d");                      //sets context to 2d
    document.addEventListener('keydown',keyDownHandler,false)
    document.addEventListener('keyup',keyUpHandler,false)
    genWorld();
    play();
}

function play()
{
    ctx.clearRect(0, 0, 960, 640);
    drawBoard();
}
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

function drawBoard()
{
    for(var i = 0; i < world.length; i++)
    {
        for(var j = 0; j < world[i].length; j++) 
        {
            if(world[j][i] === 0)
                drawGrass(i * 40  - j * 40 + 480, j*20 + i*20 + 240, 40, 40, 40);
            if(world[j][i] === 1)
                drawSand(i * 40  - j * 40 + 480, j*20 + i*20 + 240, 40, 40, 40);
            
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
    ctx.moveTo(x, y - h);
    ctx.lineTo(x - wx, y - h - wx * 0.5);
    ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
    ctx.lineTo(x + wy, y - h - wy * 0.5);
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
function keyDownHandler(e)
{
    if(e.key = 'w')
    {

    }
}
function keyUpHandler(e)
{
    
  
}
function getRandomInt(min, max) 
{
  min = Math.ceil(min);
  max = Math.floor(max) + 1;
  return Math.floor(Math.random() * (max - min)) + min;
}

setInterval(play,10);