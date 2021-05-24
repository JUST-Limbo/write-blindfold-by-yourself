// 不兼容index arr
Array.prototype.myReduce = function (fn, base) {
	let originArr = this
	let arr = originArr.concat()
	if (base) arr.unshift(base)
	let newValue
	while (arr.length > 1) {
		newValue = fn.call(null, arr[0], arr[1])
		arr.splice(0, 2, newValue)
	}
	return newValue
}
