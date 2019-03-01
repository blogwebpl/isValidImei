export default (imei) => {
	const length = imei.length;
	const parity = length % 2;
	let sum = 0;
	let position;
	for (position = length - 1; position >= 0; position--) {
		let c = parseInt(imei.charAt(position));
		if (position % 2 === parity) {
			c *= 2;
		}
		if (c > 9) {
			c -= 9;
		}
		sum += c;
	}
	return sum % 10 === 0;
};
