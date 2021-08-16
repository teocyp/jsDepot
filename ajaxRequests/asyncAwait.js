const getTodos = async () => {

    const response = await fetch('../ajaxRequests/luigi.json');

    if (response.status !== 200) {
        throw new Error('cannot fetch the data');
    }
    const data = await response.json(); // because response.json returns a promise as well, so it waits until it resolves..
    return data;
};

getTodos()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected:', err.message));