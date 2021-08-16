const array = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4

console.log(array.fill(0, 2, 4)); //output: 1, 2, 0, 0

// fill with 5 from position 1

console.log(array.fill(5, 1)); //output: 1,5,5,5

// fill with 3 from position 1 until position 3

console.log(array.fill(3, 1, 3)); //output 1, 3, 3, 5

// fill with 6

console.log(array.fill(6)); //output 6, 6, 6, 6

// fill with 3 from 1 to 3

console.log(array.fill(3, 1, 3)); //output 6, 3, 3, 6