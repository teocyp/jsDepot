// copyWithin() shallow copies part of an array to another location in the same array and returns it without modifying its length.

const array = ['a', 'b', 'c', 'd', 'e', 'f'];

const newArray = array.copyWithin(0, 3, 5); // Copy to index 0 the element at index 3 but not included index 5

console.log(newArray); //outputs ['d', 'e', 'c', 'd', 'e', 'f'] 

const newArray2 = array.copyWithin(2, 3); // Copy to index 2 the element starting from index 3 to the end

console.log(newArray2); //outputs ['d', 'e', 'd', 'e', 'f', 'f']