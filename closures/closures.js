/*

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.


*/

function greeting(language) {
	return function (firstName, secondName) {
		if (language === 'en') {
			console.log(`Hello, ${firstName} ${secondName}`);
		} else if (language === 'es') {
			console.log(`Hola, ${firstName} ${secondName}`);
		}
	};
}

let greetEnglish = greeting('en');
let greetSpanish = greeting('es');

greetEnglish('Teo', 'Artourk');
greetSpanish('Teo', 'Artourk');
