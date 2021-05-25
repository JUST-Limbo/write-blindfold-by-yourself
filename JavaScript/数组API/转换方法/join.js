// join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。定一个字符串来分隔数组的每个元素。如果需要，将分隔符转换为字符串。如果缺省该值，数组元素用逗号（,）分隔。如果separator是空字符串("")，则所有元素之间都没有任何字符。如果一个元素为 undefined 或 null，它会被转换为空字符串。
Array.prototype.myJoin = function (separator = ',') {
  let result = ''
	for (let i = 0; i < this.length; i++) {
		if (this[i]) {
			result += this[i].toString()
		} else {
			result += ''
		}
		if (i < this.length - 1) {
			result += separator
		}
	}
	return result
}
console.log([1, 2, 3, 4, 5].myJoin(null))
console.log([1, 2, 3, 4, 5].join(null))
