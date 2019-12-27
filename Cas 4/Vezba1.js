
// prva zadaca

// var objekt = {name:"John", surname:"Bell", age:18}

// for (i=0;i<objekt.length;i++)
// for(var x in objekt){
// 	console.log(x)
// }
// console.log(objekt.x)


// vtora zadaca

json = {jsonData:{one:[11,12,13,14,15],
					two:[21,22,23],
					three:[31,32]}};

for(x in json.jsonData){
	for(k in json.jsonData[x]){
		console.log(json.jsonData[x][k])
}
}




