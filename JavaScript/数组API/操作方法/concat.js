//  concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。如果省略了所有 valueN 参数，则 concat 会返回调用此方法的现存数组的一个浅拷贝。
Array.prototype.myConcat = function (...args) {
	if (!args.length) return this
	let result = []
	for (let i = 0; i < args.length; i++) {
		if (Array.isArray(args[i])) {
			for (let j = 0; j < args[i].length; j++) {
				result.push(args[i][j])
			}
		} else {
			result.push(args[i])
		}
	}
	return result
}
console.log([].myConcat(1, 2, 3, 3, 45))
console.log([].myConcat(1, 2, 3, { name: 'dd' }, 45))
console.log([].myConcat([1, [2]], 3, 3, 45))
console.log([].myConcat())
