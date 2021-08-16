//Getting and Setting Attributes

const headingOne = document.querySelector('h1');
headingOne.setAttribute('style', 'color: turquoise'); // creates a style attribute to h1..

console.log(headingOne.getAttribute('style')); // Gets already defined element attribute..



// Warning: Set attributes overwrites the current attribute on the element. If you want to add multiple attributes checkout changeStyles.js file..
