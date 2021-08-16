// findIndex() returns the index of the first element in the array that satisfies the provided testing function.

const array = [5, 12, 8, 130, 44];

const largeNumber = array.findIndex((element) => {
      return element > 13;
});

console.log(largeNumber); //outputs 3..



const array2 = [5, 12, 8, 130, 44];

const number2 = array.findIndex(element => {
      return element > 18;
})

console.log(number2); //outputs 1