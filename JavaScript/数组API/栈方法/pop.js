// pop()方法从数组中删除最后一个元素，并返回该元素的值(当数组为空时返回undefined)。此方法更改数组的长度。
Array.prototype.myPop = function () {
	if (this.length === 0) return undefined
	let result = this[this.length - 1]
	this.length -= 1
	return result
}
let arr=[1,2,3,4]
console.log(arr.myPop(),arr)
