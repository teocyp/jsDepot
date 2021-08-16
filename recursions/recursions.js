/*

The act of a function calling itself, recursion is used to solve problems that contain smaller sub-problems. A recursive function can receive two inputs: a base case (ends recursion) or a recursive case (resumes recursion).

*/


function factorial(n) {
    if ((n === 0) || (n === 1))
        return 1;
    else
        return (n * factorial(n - 1));
};

console.log(factorial(5));

/*

var a, b, c, d, e;
a = factorial(1); // a gets the value 1
b = factorial(2); // b gets the value 2
c = factorial(3); // c gets the value 6
d = factorial(4); // d gets the value 24
e = factorial(5); // e gets the value 120

*/
  // outputs 120