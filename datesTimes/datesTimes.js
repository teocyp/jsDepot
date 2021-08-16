// Dates & Times

const now = new Date();

console.log(now);

// years, months, days, times

console.log('getFullYear:', now.getFullYear());
console.log('getMonth:', now.getMonth());
console.log('getDate:', now.getDate());
console.log('getDay:', now.getDay());
console.log('getHours:', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());


// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());


// converting timestamps into dates
console.log('timestamp:', now.getTime());

const timestamp = 1751052155489;

const newDate = new Date(timestamp);

console.log(newDate);

