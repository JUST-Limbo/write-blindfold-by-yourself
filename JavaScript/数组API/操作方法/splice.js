// splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
/*
start​
  指定修改的开始位置（从0计数）。如果超出了数组的长度，则从数组末尾开始添加内容；如果是负值，则表示从数组末位开始的第几位（从-1计数，这意味着-n是倒数第n个元素并且等价于array.length-n）；如果负数的绝对值大于数组的长度，则表示开始位置为第0位。
deleteCount 可选
  整数，表示要移除的数组元素的个数。
  如果 deleteCount 大于 start 之后的元素的总数，则从 start 后面的元素都将被删除（含第 start 位）。
  如果 deleteCount 被省略了，或者它的值大于等于array.length - start(也就是说，如果它大于或者等于start之后的所有元素的数量)，那么start之后数组的所有元素都会被删除。
  如果 deleteCount 是 0 或者负数，则不移除元素。这种情况下，至少应添加一个新元素。
  item1, item2, ... 可选
  要添加进数组的元素,从start 位置开始。如果不指定，则 splice() 将只删除数组元素。
*/
Array.prototype.mySplice = function (begin = 0, count, ...items) {
	let result
	let rightRemain
	let startIndex
	let deleteCount

	if (isNaN(Number(begin))) {
		startIndex = 0
	} else {
		if (Number(begin) < 0 && Math.abs(Number(begin)) > this.length) {
			startIndex = 0
		} else if (Number(begin) < 0) {
			startIndex = Number(begin) + this.length
		} else if (Number(begin) < this.length) {
			startIndex = Number(begin)
		} else {
			startIndex = this.length
		}
	}

	if (typeof count === 'undefined') {
		deleteCount = this.length - startIndex
	} else if (isNaN(Number(count))) {
		deleteCount = 0
	} else {
		if (Number(count) <= 0) {
			deleteCount = 0
		} else if (Number(count) < this.length - startIndex) {
			deleteCount = Number(count)
		} else {
			deleteCount = this.length - startIndex
		}
	}

	result = this.slice(startIndex, startIndex + deleteCount)

	rightRemain = this.slice(startIndex + deleteCount)

	this.length = startIndex // 截断

	/*
    当this.length=startIndex执行后,原数组被截断.
    此时不能用 this=this.concat(result,rightRemain)
    因为concat会返回一个新的数组(引用类型),赋值后this原本存储的地址会被替换,
    会导致this指向另一个数组,这样的话就不满足 '改变原数组' 了
  */
	for (let i = 0; i < items.length; i++) {
		this.push(items[i])
	}
	for (let i = 0; i < rightRemain.length; i++) {
		this.push(rightRemain[i])
	}
	return result
}

console.log('1-----------------------')
var months = ['Jan', 'March', 'April', 'June']
var months2 = ['Jan', 'March', 'April', 'June']
console.log(months.splice(1, 0, 'Feb'))
console.log(months2.mySplice(1, 0, 'Feb'))
console.log(months)
console.log(months2)

console.log('2-----------------------')
console.log(months.splice(4, 1, 'May'))
console.log(months2.mySplice(4, 1, 'May'))
console.log(months)
console.log(months2)

console.log('3-----------------------')
var fruits = ['Banana', 'Orange', 'Apple', 'Mango']
var fruits2 = ['Banana', 'Orange', 'Apple', 'Mango']
console.log(fruits.splice(2, 1, 'Lemon', 'Kiwi'))
console.log(fruits2.mySplice(2, 1, 'Lemon', 'Kiwi'))
console.log(fruits)
console.log(fruits2)

console.log('4-----------------------')
var A = [1, 2, 3, 4, 5]
var A2 = [1, 2, 3, 4, 5]
console.log(A.splice(1, -1, 000, 111, 222, 333, 444))
console.log(A2.mySplice(1, -1, 000, 111, 222, 333, 444))
console.log(A)
console.log(A2)

console.log('5-----------------------')
var B = [1, 2, 3, 4, 5]
var B2 = [1, 2, 3, 4, 5]
console.log(B.splice(-3, -2, 000, 111, 222, 333, 444))
console.log(B2.mySplice(-3, -2, 000, 111, 222, 333, 444))
console.log(B)
console.log(B2)

console.log('6-----------------------')
var C = [1, 2, 3, 4, 5]
var C2 = [1, 2, 3, 4, 5]
console.log(C.splice(-3, 0, 000, 111, 222, 333, 444))
console.log(C2.mySplice(-3, 0, 000, 111, 222, 333, 444))
console.log(C)
console.log(C2)

console.log('7-----------------------')
var D = [1, 2, 3, 4, 5]
var D2 = [1, 2, 3, 4, 5]
console.log(D.splice(-3, 0, 000, 111, 222, 333, 444))
console.log(D2.mySplice(-3, 0, 000, 111, 222, 333, 444))
console.log(D)
console.log(D2)

console.log('8-----------------------')
var E=['a', 'b', 'c', 'd','e']
var E2=['a', 'b', 'c', 'd','e']
console.log(E.splice(()=>{}))
console.log(E2.mySplice(() => {}))
console.log(E)
console.log(E2)
