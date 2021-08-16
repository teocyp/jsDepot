// fetch api

fetch('../ajaxRequests/teo.json')
    .then((response) => {
        console.log('resolved:', response);
        return response.json(); // this returns a promise that is why we chain another .then method to get the real data..
    })
    .then(data => {
        console.log(data);
    })
    .catch((err) => {
        console.log('rejected:', err);
    });


// All we need to remember is 3 steps

/*

1 - Fetch the data
2 - Take the response and return response.json promise
3 - Attach a .then to it to access the data

*/