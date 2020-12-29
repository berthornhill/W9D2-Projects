function MovingObject(optionsHash) { 
 
        this.pos = optionsHash["pos"]; // [x,y]
        this.vel = optionsHash["vel"]; 
        this.radius = optionsHash["radius"]; // integer
        this.color = optionsHash["color"];
        
};


MovingObject.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI );
    ctx.stokeStyle = "rgb(102, 153, 153)";
    // ctx.lineWidth
    ctx.stroke();
    ctx.fillStyle = "rgb(102, 153, 153)";
    ctx.fill();
}


module.exports = {
    MovingObject,
}

const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 20,
    color: "#00FF00"
  });

//   console.log(mo);