// EXPORT
// module "my-module.js"

function cube(x) {
    return x * x * x;
}

const calc = Math.PI + Math.SQRT2;

var graph = {
    options: {
        color: 'white',
        thickness: '2px'
    },
    draw: function () {
        console.log('From graph draw function');
    }
}

export { cube, calc, graph };

//-------------------------------------------------------

// IMPORT
import { cube, foo, graph } from './my-module.js';

graph.options = {
    color: 'blue',
    thickness: '3px'
};

graph.draw();
console.log(cube(3)); // 27
console.log(foo);    // 4.555806215962888