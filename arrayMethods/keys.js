// keys() method returns a new Array Iterator object that contains the keys of each index in the array.


const numbers = [1, 2, 3];
const iterator = numbers.keys();

for (let key of iterator) {
      console.log(key);
};

/* outputs
0
1
2
*/