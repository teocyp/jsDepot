// Event bubbling is when a child event fires up, such as li, the event bubbles up and fires the event for the parent element as well. In order to stop that, we use 'e.stopPropagation();' inside the event listener function, such as line 17.

const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    console.log('event on BUTTON');
    li.textContent = 'something new to do';
    ul.prepend(li);
});

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', (e) => {
//         console.log('event in LI');
//         e.stopPropagation();
//         e.target.remove();
//     });
// });

ul.addEventListener('click', e => {
    // console.log('event in UL');
    console.log(e.target);
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});

// Event Delegation
// In order to add event listeners to new added elements and prevent adding stopPropagation() to each event listener function, we use Event Delegation..