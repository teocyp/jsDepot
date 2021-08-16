// L1: Bartender, drinks!
function getDrinkByProfession(param) {
	let lowerCasedInput = param.toLowerCase();
	if (lowerCasedInput === 'jabroni') {
		return 'Patron Tequila';
	} else if (lowerCasedInput === 'school counselor') {
		return 'Anything with Alcohol';
	} else if (lowerCasedInput === 'programmer') {
		return 'Hipster Craft Beer';
	} else if (lowerCasedInput === 'bike gang member') {
		return 'Moonshine';
	} else if (lowerCasedInput === 'politician') {
		return 'Your tax dollars';
	} else if (lowerCasedInput === 'rapper') {
		return 'Cristal';
	} else {
		return 'Beer';
	}
}
