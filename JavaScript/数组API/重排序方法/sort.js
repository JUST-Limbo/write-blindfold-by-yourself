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
