const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const pattern = /^[a-zA-Z0-9]{6,}$/;

form.addEventListener('submit', e => {
    e.preventDefault();

    //validation
    const username = form.username.value;

    if (pattern.test(username)) {
        feedback.textContent = 'The username is valid'
    };

    if (!pattern.test(username)) {
        feedback.textContent = 'Please enter a valid username!'
    }
});

// live feedback

form.username.addEventListener('keyup', e => {
    if (pattern.test(e.target.value)) {
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'error')
    }
});