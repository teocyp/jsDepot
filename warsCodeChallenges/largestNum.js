function largestOfFour(arr) {
	let results = [];
	arr.filter((item) => {
		results.push(Math.max(...item));
	});
	return results;
}

console.log(
	largestOfFour([
		[4, 5, 1, 3],
		[13, 27, 18, 26],
		[32, 35, 37, 39],
		[1000, 1001, 857, 1],
	])
);
