// flat() flattens the original array with sub-arrays into one array
// multi-dimensional array into single array


const numbers = [1, 2, 3, [4, 5]];

const numbersFlat = numbers.flat();

console.log(numbersFlat) // outputs [1, 2, 3, 4, 5];

//----------------------------------------------------

const threeArrays = [1, 2, 3, [4, 5, [6, 7, 8]]]; //to flatten this it takes an argument


const threeArraysFlat = threeArrays.flat(2); //number 2 means how many deep arrays are in an array

console.log(threeArraysFlat)  // outputs [1, 2, 3, 4, 5, 6, 7, 8]

