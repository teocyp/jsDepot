const button = document.querySelector('button');

button.addEventListener('click', () => {
    console.log('I am clicked!');
});

const items = document.querySelectorAll('li');

items.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.target.style.textDecoration = 'line-through';
    })
});


// addEventListener gives us 2 parameters..
/*

First parameter is to specify what kind of event it is and second parameter is the target event..

e.target used often when we target items..

*/
