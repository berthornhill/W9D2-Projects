const MovingObject = require("./moving_object.js");
const GameView = require("./game_view.js");

window.MovingObject = MovingObject;
window.MovingObject = MovingObject.MovingObject;

document.addEventListener("DOMContentLoaded", function(){
    GameView.canvasLoad();
});


console.log("webpack is working!")

