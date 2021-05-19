Function.prototype.myApply = function (context, args = []) {
	let cxt = context || window
	//  将当前被调用的方法定义在cxt.func上.(  cxt.func()执行,func内部的this指向cxt  )
	//  新建一个唯一的Symbol变量避免重复
	let func = Symbol()
	cxt[func] = this // 此处this指向调用myCall的函数对象
	//  以对象调用形式调用func,此时this指向cxt 也就是传入的需要绑定的this指向
	const res = args.length > 0 ? cxt[func](...args) : cxt[func]()
	delete cxt[func]
	return res
}

function logText() {
	console.log(this.text)
}

var obj = {
	text: 'obj.text'
}

logText.myApply(obj)
