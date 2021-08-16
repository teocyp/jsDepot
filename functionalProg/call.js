// Call method

// .call and .apply are Function methods that 'manipulate' what this means inside a function.

function printName(firstName, lastName) {
    console.log(`${firstName} ${lastName}`);
    console.log(this); // with call method, we are able to change the value of 'this' keyword..
}

/* This method takes in two arguments

- The first argument is the value of 'this' keyword.
- 

*/
printName.call({
    model: 'Iphone Xs',
    color: 'Black'
}, 'Teo', 'Artourk');

