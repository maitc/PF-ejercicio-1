/*Versión PP.
function intersection(l1, l2){
	var l3 = [];
	for(var i = 0; i<l1.length; i++){
		for(var j = 0; j<l2.length; j++){
			if(l1[i]==l2[j]){
				l3.push(l1[i]);
			}
		}
	}
	return l3;
}*/


//Version PF.
function intersectionSet2(l1, l2){
	return l1.filter(function(n){
		return l2.indexOf(n) !== -1

	});
}

document.write(intersectionSet2([1, 3, 4, 6, 2], [1, 3, 2, 6, 7]));