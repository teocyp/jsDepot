const username = 'tAdd7nnnn';

const pattern = /^[a-zA-Z0-9]{8,}$/; //Regex pattern - letters only from a-z and minimum 8 characters including before ^ and after $ should be empty.

let result = pattern.test(username);

if (result) {
    console.log('Regex test passed!')
} else {
    console.log('Regex test failed!');
}

