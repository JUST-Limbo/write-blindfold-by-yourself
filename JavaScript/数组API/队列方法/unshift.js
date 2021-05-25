// unshift() 方法将 一个或多个元素 添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。
Array.prototype.myUnshift = function () {
	let increaseLength = arguments.length
	let totalLength = increaseLength + this.length
	for (let i = totalLength - 1; i >= 0; i--) {
		if (i > increaseLength - 1) {
			this[i] = this[i - increaseLength]
		} else {
			this[i] = arguments[i]
		}
	}
	return this.length
}
;[1, 2].myUnshift(1, 2, 3, 4)
