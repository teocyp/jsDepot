// Variables & Block Scope

let age = 31; // Global Scope: It can be accessed anywhere on the file.

// let age = 50; This is not allowed

// We are allowed to re-define a variable inside a code block.
if (true) {
    let age = 40; // This is a local scope..
    let name = 'Teo'; // We can't access it outside this code block
    console.log(`Inside 1st code block ${age} ${name}`);

}

if (true) {
    console.log(`Inside 2nd code clock ${age}`)
}

console.log(`Outside code block ${age} ${name}`);