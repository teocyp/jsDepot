// toLocaleString() method returns a string representing the elements of the array. 
// The elements are converted to strings using their toLocaleString methods and they are separated by comma.


const arr = [1, 'a', new Date()];

const localeString = arr.toLocaleString();

console.log(localeString);