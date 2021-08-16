// Function Declaration

function greet() {
    console.log('Hello there!');
}

greet()

// Because of hoisting, JavaScript takes function declarations at the top of the file.


// Function Expression 

const greet2 = function () {
    console.log('Hello there 2!');
}
// This is more preferable way in order to write a clean and tidy code. To run this function, we should invoke it below the code block.

// arguments and parameters

const greeting = function (name, time) {
    console.log(`Good ${time} ${name}`);
}

greeting('Teo', 'morning');


