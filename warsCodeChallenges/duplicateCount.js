function duplicateCount(text) {
	let arr = text.toLowerCase().split('');

	let newArray = arr.filter((a, b) => {
		return arr.indexOf(a) !== b;
	});

	return newArray.filter((item, pos) => {
		return newArray.indexOf(item) === pos;
	}).length;
}
duplicateCount('Indivisibilities');

function duplicateCount(text) {
	let arr = text.toLowerCase().split('');

	let newArray = arr.filter((item, position) => {
		return arr.indexOf(item) !== position;
	});

	return newArray.filter((item, position) => {
		return newArray.indexOf(item) === position;
	}).length;

	return newArray;
}

console.log(duplicateCount('Teo Artourk'));
