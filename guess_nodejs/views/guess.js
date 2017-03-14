function getNumber() {
	var max = 100;
	var min = 0;
	return Math.floor(Math.random() * (max - min + 1)) + min;

}

function isNumeric (n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function check( number, answer) {
	if (number == answer){
		return 'You are the champion!';
	} else if (number > answer) {
		return 'more..';
	} else {
		return 'less..';
	}
}

function cycle (answer, number, attempts) {
	var limit = 7;
	if (attempts < limit) {
		attempts += 1;
		return check(number, answer);
	} else {
		return 'you lose.. try again'
	}
}

exports.cycle = cycle;
exports.getNumber = getNumber;
exports.isNumeric = isNumeric;