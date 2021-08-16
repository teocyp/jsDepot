/* slice() method 

- returns a copy of a portion of an array into a new array object selected from start to end (end not included) 
- where start and end represent the index of items in that array. 
- The original array will not be modified.

*/



const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2)); // outputs ['camel', 'duck', 'elephant']
// this means start from index 2 and copy until the end of the array

console.log(animals); // outputs original array


console.log(animals.slice(1, 4)); // outputs ['bison', 'camel', 'duck']
// this means start from index 1 and copy until index 4 (not include index 4)