// indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。

/*
searchElement
  要查找的元素
fromIndex 可选
  开始查找的位置。如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回-1。如果参数中提供的索引值是一个负值，则将其作为数组末尾的一个抵消，即-1表示从最后一个元素开始查找，-2表示从倒数第二个元素开始查找 ，以此类推。 注意：如果参数中提供的索引值是一个负值，并不改变其查找顺序，查找顺序仍然是从前向后查询数组。如果抵消后的索引值仍小于0，则整个数组都将会被查询。其默认值为0.
*/
Array.prototype.myIndexOf = function (searchElement, fromIndex = 0) {
	if (this.length == 0) return -1
	// 此处也可以不声明startIndex直接对fromIndex覆盖赋值,但是对形参赋值这种行为从代码规范的角度似乎不太合适?
	let startIndex
	if (isNaN(Number(fromIndex))) {
		startIndex = 0
	} else if (Number(fromIndex) < 0 && Number(fromIndex) < -this.length) {
		startIndex = 0
	} else if (Number(fromIndex) < 0) {
		startIndex = Number(fromIndex) + this.length
	} else if (Number(fromIndex) < this.length) {
		startIndex = Number(fromIndex)
	} else {
		return -1
	}

	for (let i = startIndex; i < this.length; i++) {
		if (searchElement === this[i]) return i
	}
	return -1
}
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
console.log(beasts.myIndexOf('bison'))

console.log(beasts.indexOf('bison', 2));
console.log(beasts.myIndexOf('bison', 2))

console.log(beasts.indexOf('giraffe'));
console.log(beasts.myIndexOf('giraffe'))
