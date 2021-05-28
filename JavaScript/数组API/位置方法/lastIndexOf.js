// lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。
/*
  searchElement
    被查找的元素。
  fromIndex 可选
    从此位置开始逆向查找。默认为数组的长度减 1(arr.length - 1)，即整个数组都被查找。如果该值大于或等于数组的长度，则整个数组会被查找。如果为负值，将其视为从数组末尾向前的偏移。即使该值为负，数组仍然会被从后向前查找。如果该值为负时，其绝对值大于数组长度，则方法返回 -1，即数组不会被查找。
*/
Array.prototype.myLastIndexOf = function (searchElement, fromIndex) {
	if (this.length == 0) return -1
	let startIndex
	if (typeof fromIndex === 'undefined') {
		startIndex = this.length - 1
	} else if (isNaN(Number(fromIndex))) {
		startIndex = 0
	} else if (
		Number(fromIndex) < 0 &&
		Math.abs(Number(fromIndex)) > this.length
	) {
		return -1
	} else if (Number(fromIndex) < 0) {
		startIndex = Number(fromIndex) + this.length
	} else if (Number(fromIndex) >= this.length) {
		startIndex = this.length - 1
	} else {
		startIndex = Number(fromIndex)
	}

	for (let i = startIndex; i > -1; i--) {
		if (searchElement === this[i]) return i
	}
	return -1
}

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
console.log(animals.myLastIndexOf('Dodo'))
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
console.log(animals.myLastIndexOf('Tiger'))
// expected output: 1
