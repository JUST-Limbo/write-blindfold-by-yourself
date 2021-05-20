// 数组扁平化的实现(flat)
let arr = [1, 2, [3, 4, [5, [6]]]]
console.log(arr.flat(Infinity)) //flat参数为指定要提取嵌套数组的结构深度，默认值为 1

//用reduce实现
Array.prototype.myFlat = function () {
	return this.reduce((prev, cur) => {
		return prev.concat(Array.isArray(cur) ? arguments.callee.call(cur) : cur)
	}, [])
}
console.log(arr.myFlat())
