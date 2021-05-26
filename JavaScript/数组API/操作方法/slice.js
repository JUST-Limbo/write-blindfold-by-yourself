// slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
/*
begin 可选
  提取起始处的索引（从 0 开始），从该索引开始提取原数组元素。
  如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，slice(-2) 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。
  如果省略 begin，则 slice 从索引 0 开始。
  如果 begin 超出原数组的索引范围，则会返回空数组。
end 可选
  提取终止处的索引（从 0 开始），在该索引处结束提取原数组元素。slice 会提取原数组中索引从 begin 到 end 的所有元素（包含 begin，但不包含 end）。
  slice(1,4) 会提取原数组中从第二个元素开始一直到第四个元素的所有元素 （索引为 1, 2, 3的元素）。
  如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取。 slice(-2,-1) 表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。
  如果 end 被省略，则 slice 会一直提取到原数组末尾。
  如果 end 大于数组的长度，slice 也会一直提取到原数组末尾。
*/
Array.prototype.mySlice = function (begin = 0, end) {
	let result = []
	let startIndex
	let endIndex
	let maxIndex = this.length - 1

	// 空数组
	if (this.length == 0) return []

	// Number(begin)不是number类型(此时也必然不是undefined类型,因为传入undefined实参时,默认参数会自动取0),截取起点下标默认为0
	// Number(begin)!=Number(begin) NaN永不相等
	if (isNaN(Number(begin))) {
		startIndex = 0
	} else {
		if (Number(begin) < 0 && Number(begin) < 0 - this.length) {
			startIndex = 0
		} else if (Number(begin) < 0) {
			startIndex = Number(begin) + this.length
		} else if (Number(begin) < this.length) {
			startIndex = Number(begin)
		} else {
			return []
		}
	}

	// end是undefined表示缺省,截取终点下标为this数组最后一个元素下标
	if (typeof end == 'undefined') {
		endIndex = maxIndex + 1
	} else if (isNaN(Number(end))) {
		return []
	} else {
		if (Number(end) < 0 && Number(end) < 0 - this.length) {
			return []
		} else if (Number(end) < 0) {
			endIndex = Number(end) + this.length
		} else if (Number(end) < this.length) {
			endIndex = Number(end)
		} else {
			endIndex = maxIndex + 1
		}
	}

	// 头尾倒转
	if (startIndex >= endIndex) {
		return []
	}

	for (let i = startIndex; i < endIndex; i++) {
		result.push(this[i])
	}
	return result
}

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log('1-----------------------')
console.log(animals.mySlice(undefined))
console.log(animals.slice(undefined))

console.log('2-----------------------')
console.log(animals.mySlice(2))
console.log(animals.slice(2))

console.log('3-----------------------')
console.log(animals.mySlice(2, 4))
console.log(animals.slice(2, 4))

console.log('4-----------------------')
console.log(animals.mySlice('2', '5'))
console.log(animals.slice('2', '5'))

console.log('5-----------------------')
console.log(animals.mySlice(-5, -1))
console.log(animals.slice(-5, -1))

console.log('6-----------------------')
console.log(animals.mySlice(0, () => {}))
console.log(animals.slice(0, () => {}))

console.log('7-----------------------')
console.log(animals.mySlice(() => {}))
console.log(animals.slice(() => {}))
