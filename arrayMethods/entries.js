// entries() method returns a new Array Iterator object that contains key/value pairs for each index in the array

const arr = ['a', 'b', 'c'];

const iterator = arr.entries();

console.log(iterator.next().value); //outputs [0, 'a'] (at 0 index the value is 'a');


