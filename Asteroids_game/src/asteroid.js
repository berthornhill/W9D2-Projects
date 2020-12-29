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

    new MovingObject(asteroidProperties);
}

module.exports = Asteroid