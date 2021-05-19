Function.prototype.myBind = function (context, ...args) {
	//新建一个变量赋值为this，表示当前函数
	const fn = this
	//判断有没有传参进来，若为空则赋值[]
	args = args ? args : []
	//返回一个newFn函数，在里面调用fn
	return function newFn(...newFnArgs) {
		if (this instanceof newFn) {
      console.log('new')
			return new fn(...args, ...newFnArgs)
		}
		return fn.apply(context, [...args, ...newFnArgs])
	}
}

function logText() {
  this.abc='abc'
	console.log(this.text)
}

var obj = {
	text: 'obj.text'
}

logText.myBind(obj)() // obj.text
var A=logText.myBind(obj)
var b=new A() // new undefined
console.log(b) // {abc:'abc'}
