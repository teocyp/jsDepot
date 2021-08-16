// Holiday VIII - Duty Free
function dutyFree(normPrice, discount, hol) {
	let saveOnBottle = (normPrice * discount) / 100;
	let bottles = Math.floor(hol / saveOnBottle);

	return bottles;
}
