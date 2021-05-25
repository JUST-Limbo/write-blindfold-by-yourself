// sort() 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的
/*
  如果指明了 compareFunction ，那么数组会按照调用该函数的返回值排序。即 a 和 b 是两个将要被比较的元素：
  如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
  如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。备注： ECMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；
  如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。
  compareFunction(a, b) 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。
*/

Array.prototype.mySort = function (compareFun) {
	if (typeof compareFun == 'function' || typeof compareFun == 'undefined') {
		for (let i = 0; i < this.length; i++) {
			for (let j = 0; j < this.length - i - 1; j++) {
				let val
				if (typeof compareFun === 'function') {
					val = compareFun(this[j], this[j + 1])
				} else if (typeof compareFun == 'undefined') {
					val = String(this[j]) > String(this[j + 1]) ? 1 : 0
				}
				if (val > 0) {
					let temp = this[j]
					this[j] = this[j + 1]
					this[j + 1] = temp
				}
			}
		}
	} else {
		throw new TypeError(compareFun + ' is not a function')
	}
	return this
}
let arr1 = [4, 32, 2, 54]
arr1.mySort((a, b) => {
	return a - b
})
console.log(arr1) // [2, 4, 32, 54]

let arr2 = [4, 32, 2, 54]
arr2.mySort()
console.log(arr2) // [2, 32, 4, 54]
