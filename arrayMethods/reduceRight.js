// reduceRight() methodd applies a function against an accumulator and each value of the array from right-to-left to reduce it to a single value.


const array = [[0, 1], [2, 3], [4, 5]];

const sumArray = array.reduceRight((acc, item) => {
      return acc.concat(item);
})

console.log(sumArray); // outputs [4, 5, 2, 3, 0, 1]