Array.prototype.mySplice = function (begin = 0, count, ...items) {
	let result = []
	let statrIndex
	let endIndex

	if (isNaN(Number(begin))) {
		statrIndex = 0
	} else {
		if (Number(begin) < 0 && Math.abs(Number(begin)) > this.length) {
			statrIndex = 0
		} else if (Number(begin) < 0) {
			statrIndex = Number(begin) + this.length
		} else if (Number(begin) < this.length) {
			startIndex = Number(begin)
		} else {
			startIndex = this.length
		}
	}
}
