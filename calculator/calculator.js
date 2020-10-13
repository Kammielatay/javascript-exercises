function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
	
}

function sum (arr) {
	let sum = arr.reduce(function(a,b){
		return a + b
	}, 0)
	return sum;
}	

function multiply (arr) {
	let sum = arr.reduce(function(a,b){
		return a * b
	})
	return sum;
	
}

function power(x,y) {
	return Math.pow(x,y)
}

function factorial(n) {
	if(n ===1 || n ===0){
		return 1
	} else {
		return n * factorial(n-1);
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}