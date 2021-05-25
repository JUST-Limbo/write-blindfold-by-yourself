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
	// 空数组
	if (this.length == 0) return []
	// 结尾越界
	if (Number(end) < 0 - this.length) {
		return []
	}
  // 头尾倒转
	if (Number(begin) >= Number(end)) {
		return []
	}

	let maxIndex = this.length - 1
	// 如果 begin 超出原数组的索引范围，则会返回空数组。
	if (Number(begin) > maxIndex) {
		return []
	}
	let startIndex = Number(begin)
	let endIndex
	if (typeof end === 'undefined' || Number(end) > maxIndex) {
		endIndex = maxIndex
	} else if (typeof end !== 'number') {
		return []
	} else {
		endIndex = end
	}
}
