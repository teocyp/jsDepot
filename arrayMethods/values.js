// values() method returns a new Array Iterator object that contains the values for each index in the array.

const arr = ['a', 'b', 'c'];

const iterator = arr.values();

for (const value of iterator) {
      console.log(value);
}