const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");


function Asteroid(position) {
    

    const asteroidProperties = {
        pos: position,
        radius: 15,
        color: "black",
        vel: Util.randomVec(500),
    }

    Util.inherits(Asteroid, MovingObject)

    return this = new MovingObject(asteroidProperties);
}

// const stella = new Asteroid([20, 20]);

// console.log(stella)
// console.log(stella.instanceof)
module.exports = Asteroid;