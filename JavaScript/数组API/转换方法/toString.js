// toString() 返回一个字符串，表示指定的数组及其元素。
Array.prototype.myToString = function () {
	let result = ''
	for (let i = 0; i < this.length; i++) {
		if (this[i]) {
			result += this[i].toString()
		} else {
			result += ''
		}
		if (i < this.length - 1) {
			result += ','
		}
	}
	return result
}
console.log([null, 2, 3, 4, 5].myToString())
console.log([null, 2, 3, 4, 5].toString())
