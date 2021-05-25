// reverse() 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。
Array.prototype.myReverse = function () {
	let len = this.length
	let midIndex = parseInt(len / 2)
	for (let i = 0; i < midIndex; i++) {
		let temp = this[i]
		this[i] = this[len - 1 - i]
		this[len - 1 - i] = temp
	}
	return this
}

console.log([1,2,3,4,5].myReverse())
console.log([1].myReverse())
console.log([].myReverse())
