function drawOverlay()
{
    drawBoxes();
}
function drawBoxes()
{
    ctx.beginPath();
    ctx.fillStyle = "#4C4CC9";
    ctx.strokeStyle = "#4C4CC9";
    ctx.rect(25, 25, 60, 60);
    ctx.rect(110, 25, 60, 60);
    ctx.rect(195, 25, 60, 60);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "#9393DE";
    ctx.strokeStyle = "#9393DE";
    ctx.rect(20, 20, 20, 20);
    ctx.rect(105, 20, 20, 20);
    ctx.rect(190, 20, 20, 20);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.strokeStyle = "black";
    ctx.font = "25px Arial";
    ctx.fillText("1",23, 39);
    ctx.fillText("2",108, 39);
    ctx.fillText("3",193, 39);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}