// shift() 方法从数组中删除第一个元素，并返回该元素的值，如果数组为空则返回undefined 。此方法更改数组的长度。
Array.prototype.myShift = function () {
	if (this.length === 0) return undefined
	let result = this[0]
	for (let i = 0; i < this.length - 1; i++) {
		this[i] = this[i + 1]
	}
	this.length -= 1
	return result
}

console.log([1].myShift())
