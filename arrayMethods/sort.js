// sort() method sorts the elements of an array in place and returns the sorted array.
// the default sort is ascending built upon converting the elements into strings
// time and space complexity will not be guaranteed.


const numbers = [23, 2, 66, 321, 1, 18, 41, 9];

// ascending order
console.log(numbers.sort((a, b) => {
      return a - b;
      // if a - b gives negative number, it means a is smaller so it will be before b in ascending order
}));


// descending order
console.log(numbers.sort((a, b) => {
      return b - a;
      // vice versa
}));

//----------------------------------------------

const players = [
      { name: 'mario', score: 20 },
      { name: 'luigi', score: 10 },
      { name: 'ryu', score: 50 },
      { name: 'yoshi', score: 10 },
      { name: 'chun-li', score: 70 },
];

players.sort((a, b) => {
      return b.score - a.score;
})

console.log(players);