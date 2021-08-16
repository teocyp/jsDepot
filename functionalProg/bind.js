// Bind method..

function printName(firstName, lastName) {
    console.log(`${firstName} ${lastName}`);
    console.log(this); // with call method, we are able to change the value of 'this' keyword..
}

/* This method takes in two arguments

- The first argument is the value of 'this' keyword.
- 

*/
printName.bind({
    model: 'Iphone Xs',
    color: 'Black'
}, 'Teo', 'Artourk');