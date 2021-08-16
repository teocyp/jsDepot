
// Array(built-in) array constructor
// Array.from() takes in a parameter and creates an array from it
const string = 'foo';

const stringArray = Array.from(string);

console.log(stringArray); //outputs ['f', 'o', 'o']

const numbers = [1, 2, 3];

const total = Array.from(numbers, (x) => {
      return x + x;
})

console.log(total); //outputs [2, 4, 6]