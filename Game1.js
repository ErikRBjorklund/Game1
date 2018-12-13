window.onload = initAll;

var canvas;
var ctx;

 
var userX = 400;
var userY = 400;

var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var facing = "ne";

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
    drawWorld();
    drawOverlay();
    changeUserPos();
    drawPlayer1(userX, userY, facing);
    playerLocation();
    
}
function changeUserPos()
{
    if(upPressed === true)
    {
        userY-=.5;
        userX+=1;
        facing = "ne";
    }
    if(downPressed === true)
    {
        userY+=.5;
        userX-=1;
        facing = "sw";
    }
    if(leftPressed === true)
    {
        userY-=.5;
        userX-=1;
        facing = "nw";
    }
    if(rightPressed === true)
    {
        userY+=.5;
        userX+=1;
        facing = "se";
    }
}
function keyDownHandler(e)
{
    if(e.key === 'w')
    {
        upPressed = true;
        downPressed = false;
        leftPressed = false;
        rightPressed = false;
    }
    if(e.key === 's')
    {
        downPressed = true;
        upPressed = false;
        leftPressed = false;
        rightPressed = false;
    }
    if(e.key === 'a')
    {
        leftPressed = true;
        downPressed = false;
        upPressed = false;
        rightPressed = false;
    }
    if(e.key === 'd')
    {
        rightPressed = true;
        downPressed = false;
        leftPressed = false;
        upPressed = false;
    }
    
}
function keyUpHandler(e)
{
    if(e.key === 'w')
    {
        upPressed = false;
    }
    if(e.key === 's')
    {
        downPressed = false;
    }
    if(e.key === 'a')
    {
        leftPressed = false;
    }
    if(e.key === 'd')
    {
        rightPressed = false;
    }
}
function getRandomInt(min, max) 
{
  min = Math.ceil(min);
  max = Math.floor(max) + 1;
  return Math.floor(Math.random() * (max - min)) + min;
}

setInterval(play,10);