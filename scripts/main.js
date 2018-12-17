window.onload = initAll;

var canvas;
var ctx;


var userX = 480;
var userY = 320;

var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var facing = "ne";

var playerHealth = 40;
var timer = 0;

var score = 0;

var rand1 = getRandomInt(1, 10);
var rand2 = getRandomInt(1, 10);

var intro = 0;

var userInput = "";

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

    if(intro === 0)
    {
        introScreen();
    }
    if(intro === 1)
    {
        introScreen2();
    }
    if(intro === 2)
    {
        introScreen3();
    }
    if(intro === 3)
    {
        introScreen4();
    }
    if(intro === 4)
    {
        introScreen5();
    }
    if(intro === 5)
    {
        introScreen6();
    }
    if(intro === 6)
    {
        introScreen7();
    }
    if(intro === 7)
    {
        introScreen8();
    }
    if(checkDead() === false && intro > 7)
    {
        drawWorld();
        changeUserPos();

        drawAll();
        playerLocation();
        implementAI();
        moveAllBullets();
        hitByBullet();
        removeOffscreenBullets();
        checkZombieHealth();
        addtimeSinceLastAttack();
        drawScore();
        if(score >= 2000)
        {
            if(timer > 100)
            {
                timer = 150;
            }
            if(timer === 150)
            {
                timer = 0;
                score += 10;
                var rand1 = getRandomInt(300, 700);
                var rand2 = getRandomInt(250, 400);
                var counter = 0;
                for(var i = 0; i < zomx.length; i++)
                {
                    if(checkCollision(rand1, rand2, zomx[i], zomy[i]) === true)
                    {
                        i = -1;
                        rand1 = getRandomInt(300, 700);
                        rand2 = getRandomInt(250, 400);
                        counter++;
                        if(counter === 5)
                        {
                            break;
                        }
                    }
                    if(checkCollision(rand1, rand2, userX, userY) === true)
                    {
                        i = -1;
                        rand1 = getRandomInt(300, 700);
                        rand2 = getRandomInt(250, 400);
                    }
                }
                addZombie(rand1, rand2, "nw", 40);
            }
            drawUserHealth();
            drawZombieHealth();
            if(checkDead() === true)
            {
                rand1 = getRandomInt(1, 10);
                rand2 = getRandomInt(1, 10);
            }
        }
        else if(score >= 500)
        {
            if(timer > 150)
            {
                timer = 150;
            }
            if(timer === 150)
            {
                timer = 0;
                score += 10;
                var rand1 = getRandomInt(300, 700);
                var rand2 = getRandomInt(250, 400);
                var counter = 0;
                for(var i = 0; i < zomx.length; i++)
                {
                    if(checkCollision(rand1, rand2, zomx[i], zomy[i]) === true)
                    {
                        i = -1;
                        rand1 = getRandomInt(300, 700);
                        rand2 = getRandomInt(250, 400);
                        counter++;
                        if(counter === 5)
                        {
                            break;
                        }
                    }
                    if(checkCollision(rand1, rand2, userX, userY) === true)
                    {
                        i = -1;
                        rand1 = getRandomInt(300, 700);
                        rand2 = getRandomInt(250, 400);
                    }
                }
                addZombie(rand1, rand2, "nw", 40);
            }
            drawUserHealth();
            drawZombieHealth();
            if(checkDead() === true)
            {
                rand1 = getRandomInt(1, 10);
                rand2 = getRandomInt(1, 10);
            }
        }
        else
        {
            if(timer === 300)
            {
                timer = 0;
                score += 10;
                var rand1 = getRandomInt(300, 700);
                var rand2 = getRandomInt(250, 400);
                var counter = 0;
                for(var i = 0; i < zomx.length; i++)
                {
                    if(checkCollision(rand1, rand2, zomx[i], zomy[i]) === true)
                    {
                        i = -1;
                        rand1 = getRandomInt(300, 700);
                        rand2 = getRandomInt(250, 400);
                        counter++;
                        if(counter === 5)
                        {
                            break;
                        }
                    }
                    if(checkCollision(rand1, rand2, userX, userY) === true)
                    {
                        i = -1;
                        rand1 = getRandomInt(300, 700);
                        rand2 = getRandomInt(250, 400);
                    }
                }
                addZombie(rand1, rand2, "nw", 40);
            }
            drawUserHealth();
            drawZombieHealth();
            if(checkDead() === true)
            {
                rand1 = getRandomInt(1, 10);
                rand2 = getRandomInt(1, 10);
            }
        }
        timer++;
    }
    if(checkDead() === true)
    {
        drawMathProblem();
    }
}
function changeUserPos()
{
    if(upPressed === true)
    {
        if(checkZombieCollisions(userX + 1, userY - 1) != true)
        {
            if(isPlayerOffBoard(userX + 2, userY - 1) === false)
            {
                userY-=.5;
                userX+=1;
            }
        }
        facing = "ne";
    }
    if(downPressed === true)
    {
        if(checkZombieCollisions(userX - 1, userY + 1) != true)
        {
            if(isPlayerOffBoard(userX - 2, userY + 1) === false)
            {
                userY+=.5;
                userX-=1;
            }
        }
        facing = "sw";
    }
    if(leftPressed === true)
    {
        if(checkZombieCollisions(userX - 1, userY - 1) != true)
        {
            if(isPlayerOffBoard(userX - 2, userY - 1) === false)
            {
                userY-=.5;
                userX-=1;
            }
        }
        facing = "nw";
    }
    if(rightPressed === true)
    {
        if(checkZombieCollisions(userX + 1, userY + 1) != true)
        {
            if(isPlayerOffBoard(userX + 1, userY + .5) === false)
            {
                userY+=.5;
                userX+=1;
            }
        }
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
    if(e.key === ' ')
    {
        addBullet(userX, userY - 15, facing);
        intro++;
    }
    if(checkDead() === true)
    {
        if(e.key === "Backspace")
        {
            userInput = userInput.substring(0, userInput.length - 1);
        }
        else if(e.key === "Enter")
        {
            if(checkAnswer() === true)
            {
                userX = 480;
                userY = 320;

                upPressed = false;
                downPressed = false;
                leftPressed = false;
                rightPressed = false;
                facing = "ne";

                playerHealth = 40;
                timer = 0;

                score = 0;

                rand1 = getRandomInt(1, 10);
                rand2 = getRandomInt(1, 10);

                userInput = "";

                zomx = [];
                zomy = [];
                zomface = [];
                zomhealth = [];
                timeSinceAttack = [];
                list = [];

                bulletx = [];
                bullety = [];
                bulletd = [];
                intro = 0;
            }
        }
        else if (e.keyCode >= 96 && e.keyCode <= 105)
            userInput += e.key;
    }
}
function keyUpHandler(e)
{
    switch (e.key) {
        case 'w':
            upPressed = false;
            break;
        case 's':
            downPressed = false;
            break;
        case 'a':
            leftPressed = false;
            break;
        case 'd':
            rightPressed = false;
            break;
    }
}
function getRandomInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max) + 1;
    return Math.floor(Math.random() * (max - min)) + min;
}

setInterval(play,10);


function drawUserHealth()
{
    // left face
    ctx.beginPath();
    ctx.rect(userX - 20, userY - 60, 40, 5)
    ctx.closePath();
    ctx.fillStyle = "red"; //"#bda27e"
    ctx.fill();

    if(playerHealth > 0)
    {
        ctx.beginPath();
        ctx.rect(userX - 20, userY - 60, playerHealth, 5)
        ctx.closePath();
        ctx.fillStyle = "green"; //"#bda27e"
        ctx.fill();
    }
}
function drawScore()
{
    ctx.beginPath();
    ctx.font = "bold 50px Helvetica";
    ctx.fillStyle = "gray";
    ctx.fillText("Score: " + score, 50, 75);
    ctx.closePath();
    ctx.fill();
}
function drawMathProblem()
{
    ctx.beginPath();
    ctx.font = "bold 40px Helvetica";
    ctx.fillStyle = "red";
    ctx.fillText("You died with a score of " + score, 150, 100);
    ctx.fillStyle = "white";
    ctx.fillText("Answer the problem to try again!", 150, 200);
    ctx.font = "bold 80px Helvetica";
    ctx.fillText(rand1 + " + " + rand2 + " = " + userInput, 200, 350);
    ctx.closePath();
    ctx.fill();
}
function checkAnswer()
{
    return rand1 + rand2 === parseInt(userInput);
}
function introScreen()
{
    ctx.beginPath();
    ctx.font = "bold 40px Helvetica";
    ctx.fillStyle = "red";
    ctx.fillText("Welcome to Erik Bjorklund's IA!", 165, 100);
    ctx.font = "bold 30px Helvetica";
    ctx.fillStyle = "white";
    ctx.fillText("Press Space to Continue", 290, 620);
    ctx.closePath();
    ctx.fill();
}
function introScreen2()
{
    ctx.beginPath();
    ctx.font = "bold 40px Helvetica";
    ctx.fillStyle = "white";
    ctx.fillText("The goal of the game is simple...", 180, 100);
    ctx.font = "bold 30px Helvetica";
    ctx.fillStyle = "white";
    ctx.fillText("Press Space to Continue", 290, 620);
    ctx.closePath();
    ctx.fill();
}
function introScreen3()
{
    ctx.beginPath();
    ctx.font = "bold 40px Helvetica";
    ctx.fillStyle = "white";
    ctx.fillText("The goal of the game is simple...", 180, 100);
    ctx.font = "bold 60px Helvetica";
    ctx.fillStyle = "red";
    ctx.fillText("Don't Die.", 340, 175);
    ctx.font = "bold 30px Helvetica";
    ctx.fillStyle = "white";
    ctx.fillText("Press Space to Continue", 290, 620);
    ctx.closePath();
    ctx.fill();
}
function introScreen4()
{
    ctx.beginPath();
    ctx.font = "bold 40px Helvetica";
    ctx.fillStyle = "white";
    ctx.fillText("The goal of the game is simple...", 180, 100);
    ctx.font = "bold 60px Helvetica";
    ctx.fillStyle = "red";
    ctx.fillText("Don't Die.", 340, 175);
    ctx.font = "bold 40px Helvetica";
    ctx.fillStyle = "white";
    ctx.fillText("And rack up as many points", 220, 225);
    ctx.fillText("as you can before you do!", 240, 275);
    ctx.font = "bold 30px Helvetica";
    ctx.fillStyle = "white";
    ctx.fillText("Press Space to Continue", 290, 620);
    ctx.closePath();
    ctx.fill();
}
function introScreen5()
{
    ctx.beginPath();
    ctx.font = "bold 60px Helvetica";
    ctx.fillStyle = "white";
    ctx.fillText("Controls:", 95, 125);

    ctx.font = "bold 30px Helvetica";
    ctx.fillStyle = "white";
    ctx.fillText("Press Space to Continue", 290, 620);
    ctx.closePath();
    ctx.fill();
}
function introScreen6()
{
    ctx.beginPath();
    ctx.font = "bold 60px Helvetica";
    ctx.fillStyle = "white";
    ctx.fillText("Controls:", 95, 125);
    ctx.font = "bold 40px Helvetica";
    ctx.fillText("W", 100, 200);
    ctx.fillText("Move Forward", 575, 200);
    ctx.fillText("A", 104, 250);
    ctx.fillText("Move Left", 575, 250);
    ctx.fillText("S", 105, 300);
    ctx.fillText("Move Down", 575, 300);
    ctx.fillText("D", 105, 350);
    ctx.fillText("Move Right", 575, 350);
    ctx.fillText("Space", 105, 450);
    ctx.fillText("Shoot", 575, 450);
    ctx.font = "bold 30px Helvetica";
    ctx.fillStyle = "white";
    ctx.fillText("Press Space to Continue", 290, 620);
    ctx.closePath();
    ctx.fill();
}
function introScreen7()
{
    ctx.beginPath();
    ctx.font = "bold 40px Helvetica";
    ctx.fillStyle = "red";
    ctx.fillText("The game gets progressively more difficult.", 75, 100);

    ctx.fillStyle = "white";
    ctx.fillText("You do not regenerate health.", 75, 200);
    ctx.fillText("Zombies attack every second.", 75, 300);
    ctx.fillText("It takes 10 attacks to kill you.", 75, 400);
    ctx.fillText("TIP: KILL ZOMBIES QUICKLY!!", 75, 500);


    ctx.font = "bold 30px Helvetica";
    ctx.fillStyle = "white";
    ctx.fillText("Press Space to Continue", 290, 620);
    ctx.closePath();
    ctx.fill();
}
function introScreen8()
{
    ctx.beginPath();
    ctx.font = "bold 40px Helvetica";
    ctx.fillStyle = "red";
    ctx.fillText("Zombies spawn every 3 seconds.", 75, 100);

    ctx.fillStyle = "white";
    ctx.fillText("You get 10 points per zombie spawn", 75, 150);
    ctx.fillText("You get 20 points per zombie kill", 75, 250);
    ctx.fillText("It takes 3 shots to kill 1 zombie", 75, 350);
    ctx.fillStyle = "red";
    ctx.font = "bold 60px Helvetica";
    ctx.fillText("Good Luck!", 80, 485);

    ctx.font = "bold 30px Helvetica";
    ctx.fillStyle = "white";
    ctx.fillText("Press Space to Begin", 310, 620);
    ctx.closePath();
    ctx.fill();
}
