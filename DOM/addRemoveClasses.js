const para1 = document.querySelector('p');

// console.log(para1.classList);

para1.classList.add('error'); // Adds class to the current element..
para1.classList.remove('error'); // Removes class from the current element..


//------------------------------------------------------

const paras = document.querySelectorAll('p'); // Selects all the p tags..


paras.forEach(para => {
    if (para.textContent.includes('error')) {
        para.classList.add('error');
    } else {
        para.classList.add('success');
    }
});


const title = document.querySelector('.title');

//TOGGLE is used, if an element has specific class, we remove it, if it doesn't have a class, we add it..

title.classList.toggle('test'); //Adds class='test' because element doesn't have it..
title.classList.toggle('test'); //Removes class='test' because element has it already..

//------------------------------------------------------
// PARENT CHILD RELATIONSHIP
const article = document.querySelector('article');

// console.log(article.children); // This is an HTML collection

const arrChildren = Array.from(article.children); // Created an array from HTML collection because we can not apple array methods on HTML collections..

arrChildren.forEach(child => {
    child.classList.add('article-element');
})

// Find who is the parent
const title2 = document.querySelector('h2');
console.log(title2.parentElement);
console.log(title2.nextElementSibling);
console.log(title2.previousElementSibling);

// Chaining
console.log(title2.nextElementSibling.parentElement.children); //HTML Collection..


