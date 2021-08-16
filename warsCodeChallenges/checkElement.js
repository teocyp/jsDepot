function checkElement(arr, elem) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].indexOf(elem) === -1) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

let test = [
	[3, 4, 5],
	[6, 4, 7],
	[9, 42, 15],
	[3, 4, 25],
];

console.log(checkElement(test, 3));
