Object.assign2 = function (target, ...source) {
	if (target == null) {
		throw new TypeError('Cannot convert undefined or null to object')
	}
	let ret = Object(target)
	source.forEach(function (obj) {
		if (obj != null) {
			for (let key in obj) {
				if (obj.hasOwnProperty(key)) {
					ret[key] = obj[key]
				}
			}
		}
	})
	return ret
}
/**
 * for...in语句以任意顺序遍历一个对象的除Symbol以外的可枚举属性(包括原型链上的可枚举属性)
 *如果你只要考虑对象本身的属性，而不是它的原型，那么使用 getOwnPropertyNames() 或执行 hasOwnProperty() 来确定某属性是否是对象本身的属性
 *https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in
 */
