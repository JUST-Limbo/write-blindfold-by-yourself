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
