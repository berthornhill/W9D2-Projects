function MovingObject(optionsHash) { 
 
        this.pos = optionsHash["pos"]; // [x,y]
        this.vel = optionsHash["vel"]; 
        this.radius = optionsHash["radius"]; // integer
        this.color = optionsHash["color"];
        
};


MovingObject.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI );
    ctx.stokeStyle = "grey";
    // ctx.lineWidth
    ctx.stroke();
    ctx.fillStyle = "grey";
    ctx.fill();
}


module.exports = {
    MovingObject,
    draw,
}

const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
  });

  console.log(mo);