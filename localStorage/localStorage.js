// store data in local storage
localStorage.setItem('name', 'mario');
localStorage.setItem('age', 40);

// get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

// remove data from local storage
localStorage.removeItem('name');

// clear all data from local storage
localStorage.clear();