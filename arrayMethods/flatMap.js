// flatMap() is going to run map method and then flat method on a multi-dimensional array..

const pairs = [
      [2, 6],
      [8, 2],
      [5, 9]
];

const result = pairs.flatMap(function (pair) {
      return [
            pair[0] + pair[1]
      ];
})

console.log(result); // outputs [8, 10, 14]