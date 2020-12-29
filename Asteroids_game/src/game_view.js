
    const canvas = document.getElementById("game-canvas");
    canvas.height = 500;
    canvas.width = 500;

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "pink";
    ctx.fillRect(0, 0, 500, 500);


module.exports = {
    canvas,
    ctx,
}