const button = document.querySelector('.fetch');
const feedback = document.querySelector('.data-info');

button.addEventListener('click', () => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            console.log(data);
        } else if (request.readyState === 4) {
            console.log('Could not fetch the data');
        }
    })

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    request.send();
})


// AJAX is the process of sending and receiving the data on the fly without reloading. (Async Js And XML = AJAX)

// const { parseJSON } = require("jquery");

/* With AJAX you can...
- Update a web page without reloading the page
- Request data from a server -  after the page has loaded
- Receive data from a server - after the page has loaded
- Send data to a server - in the background
*/


/* XMLHTTPRequest...

- Establishes connection with the URL we specify and lets us send and receive data

*/