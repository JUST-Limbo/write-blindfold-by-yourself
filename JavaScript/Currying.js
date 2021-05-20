function sumFn(a, b, c) {
	return a + b + c
}
let sum = curry(sumFn)
sum(2)(3)(5) //10
sum(2, 3)(5) //10
function curry(fn, ...args) {
	// length 属性指明函数的形参个数。
	let fnLen = fn.length
	let argsLen = args.length
	//对比函数的参数和当前传入参数
	//若参数不够就继续递归返回curry
	//若参数够就调用函数返回相应的值
	if (fnLen > argsLen) {
		return function (...arg2s) {
			// 上轮参数加上这轮参数重新进curry()
			return curry(fn, ...args, ...arg2s)
		}
	} else {
		return fn(...args)
	}
}
