// push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
Array.prototype.myPush = function () {
	for (let i = 0; i < arguments.length; i++) {
		this[this.length] = arguments[i]
	}
	return this.length
}
