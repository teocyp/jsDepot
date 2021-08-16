// pop() method removes the last element from an array an returns that element. This method changes the length of the array.


const numbers = [1, 2, 3, 4, 15, 72, 213];
const removedElement = numbers.pop();

console.log(removedElement); // outputs 213
console.log(numbers); // outputs [1, 2, 3, 4, 15, 72]