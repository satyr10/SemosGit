var p1 = 40;
var p2 = 50;

function CalculateMath(p1, p2)
{
	return p1*p2
}
var result = CalculateMath(p1, p2);
console.log(result)


function map(a){
	var result = [];
	var i;
	for (i = 0; i!= a.length; i++) {
		result[i] = "Hello from " + i + " element!"
	}
	return result;
}

var numbers = [0, 1, 3, 5, 10, 100];
for (i=0; i<1000; i++){
var result_from_function = map(numbers);
console.log(result_from_function);}