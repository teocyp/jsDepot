// Basic check..

// logical operators - OR || and AND &&

const password = 'p@ssword!!123';

if (password.length >= 12 && password.includes('@')) {
      console.log('that password is very strong!');
} else if (password.length >= 8) {
      console.log('that password is strong enough!')
} else {
      console.log('increase the strength of your password!');
}