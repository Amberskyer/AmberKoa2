/**
 * @author wuke
 * @date 2018-12-30
 * @Description: Page:6/11  数值和布尔值的解构赋值
 */
let {toString: s} = 123
console.log({s})//{ s: [Function: toString] }
console.log(s === Number.prototype.toString)//true

let {toString: s} = true
console.log({s})//{ s: [Function: toString] }
console.log(s === Boolean.prototype.toString)//true

/*   解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于 undefined 和 null 无法转为对象，所以对它们进行解构赋值，都会报错   */
let {prop: x} = undefined// TypeError
let {prop: y} = null// TypeError

