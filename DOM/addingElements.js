const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', () => {
    const li = document.createElement('li'); // creates element and assigns to a variable..
    li.textContent = 'something new to do';
    ul.append(li); // appends at the end of the parent..
    ul.prepend(li); // adds at the beginning of the parent..
})