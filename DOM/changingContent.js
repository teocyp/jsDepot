const para = document.querySelector('p');
const paras = document.querySelectorAll('p');
const errors = document.querySelector('.error');


// Changing the page Content - Overwriting
para.innerText = 'JavaScript is awesome';

// Changing the page Content - Appending
para.innerText += ' baby!';

// Cycling through all tags and updating

paras.forEach((item) => {
    item.innerText += ' All text is updated';
})

// Changing inner HTML for ex: p tag to h2 tag
const content = document.querySelector('#animal-info');

content.innerHTML = '<h2>this is a new h2</h2>';

// Embedding new info to the html

const people = ['Teo', 'Mun', 'Bekir', 'Alena'];

people.forEach(names => {
    content.innerHTML += `<p>${names}</p>`;
})


//------------------------------------------------------