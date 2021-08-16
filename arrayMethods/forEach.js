// forEach Method...

const numbers = [1, 2, 3, 4, 5, 25, 30];

numbers.forEach((item, index, arr) => {
      return (`a[${index}] is number ${item}`);
});

//sum of the items
let sum = 0;

numbers.forEach((item) => {
      sum += item;
});

// console.log(sum);

//how many times a letter appears in array

const letters = ['a', 'b', 'c', 'a', 'd', 'a', 'b'];

let count = {};

letters.forEach(item => {
      if (count[item] != null) {
            count[item]++;
      } else {
            count[item] = 1;
      }
});

console.log(count);