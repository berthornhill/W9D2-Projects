const MovingObject = require("./moving_object.js");
const GameView = require("./game_view.js");

window.MovingObject = MovingObject;
window.MovingObject = MovingObject.MovingObject;
window.GameView = GameView.canvas;

document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext('2d');
    canvas.height = 500;
    canvas.width = 500;

})


console.log("webpack is working!")

