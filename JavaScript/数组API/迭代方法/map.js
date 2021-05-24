Array.prototype.myMap = function (fn) {
	let res = []
	for (let i = 0; i < this.length; i++) {
		res.push(fn(this[i], i, this))
	}
}

let arr=[1,2,3,4,5,6,7,8]
console.log(arr.myMap((item,index,arr)=>{
  return item*2
}))
