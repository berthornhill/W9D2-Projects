const MovingObject = require("./moving_object.js");
const canvas = require("./canvas.js");
const Util = require("./utils.js");
const Asteroid = require("./asteroid.js");

// remove after testing
// window.MovingObject = MovingObject;
window.Asteroid = Asteroid;


document.addEventListener("DOMContentLoaded", function () {
    canvas.canvasLoad();
});


console.log("webpack is working!")

