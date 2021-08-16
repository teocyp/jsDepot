// push() method adds zero or more elements to the end of an array and returns the new array. This method changes the length of the array.


const animals = ['Bird', 'Elephant', 'Tiger', 'Snail'];
const count = animals.push('Cow', 'Piggy');

console.log(count); // outputs 6
console.log(animals); // outputs ['Bird', 'Elephant', 'Tiger', 'Snail', 'Cow', 'Piggy']