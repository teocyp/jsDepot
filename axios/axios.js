
const button = document.querySelector('#btn');
const jokeContainer = document.querySelector('#joke-container');

const addNewJoke = async () => {
    const jokeText = await getDadJokes();
    const newLi = document.createElement('LI');
    newLi.append(jokeText);
    jokeContainer.append(newLi);
}

const getDadJokes = async () => {
    const configHeaders = { headers: { Accept: 'application/json' } };
    const response = await axios.get('https://icanhazdadjoke.com/', configHeaders);
    return response.data.joke;
}

button.addEventListener('click', addNewJoke);
getDadJokes();
