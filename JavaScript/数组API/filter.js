Array.prototype.myFilter = function (fn) {
	let res = []
	for (let i = 0; i < this.length; i++) {
		if (fn(this[i], i, this)) {
			res.push(this[i])
		}
	}
	return res
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(
	arr.myFilter((item, index, arr) => {
		return item % 2 == 0
	})
)
