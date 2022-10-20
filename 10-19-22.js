// Array.diff

//filter array a
//remove array b from array a
//return array a

function arrayDiff(a, b) {
	return a.filter(function(el) {
		return !b.includes(el)
	})
}

console.log((arrayDiff([1,2,2,2,3],[2])))