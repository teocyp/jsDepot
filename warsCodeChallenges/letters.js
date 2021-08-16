let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let letter = alphabet.split('');

function solve(s) {
	let result = letter.forEach((item, index) => {
		if (letter[index] === s[index]) {
			return true;
		} else {
			return false;
		}
	});
	return result;
}

console.log(solve('abcd'));
