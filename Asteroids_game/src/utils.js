function Util() {}

Util.inherits = function(childClass, parentClass) {
            function Surroget() {};
            Surroget.prototype = parentClass.prototype;
            childClass.prototype = new Surroget();
            childClass.prototype.constructor = childClass;
    }

Util.randomVec = function(length) {
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    }
    
Util.scale = function(vec, m) {
        return [vec[0] * m, vec[1] * m];
    }


module.exports = Util

// const Util = {
//     inherits(childClass, parentClass) {
//         function Surroget() {};
//         Surroget.prototype = parentClass.prototype;
//         childClass.prototype = new Surroget();
//         childClass.prototype.constructor = childClass;
//     },

//     randomVec(length) {
//         const deg = 2 * Math.PI * Math.random();
//         return Util.scale([Math.sin(deg), Math.cos(deg)], length);
//     },
    
//     scale(vec, m) {
//         return [vec[0] * m, vec[1] * m];
//     }
// };


