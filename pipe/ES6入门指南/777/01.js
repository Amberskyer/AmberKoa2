/**
 * @author wuke
 * @date 2018-12-30
 * @Description: Page:1/11  codePointAt()
 */

/*   函数参数的默认值   */
// function log(x, y) {
//     y = y || "World"
//     console.log(x,y)
// }
//
// log("Hello")//Hello World
// log("Hello", "China")//Hello China
// log("Hello", "")//Hello World

// function log(x, y) {
//     if(typeof y === "undefined"){
//         y = "World"
//     }
//     console.log(x,y)
// }
// log("Hello")//Hello World
// log("Hello", "China")//Hello China
// log("Hello", "")//Hello World

// function log(x, y = "World") {
//     console.log(x, y)
// }
//
// log("Hello")//Hello World
// log("Hello", "China")//Hello China
// log("Hello", "")//Hello World
//
// function Point(x = 0, y = 0) {
//     this.x = x
//     this.y = y
// }
//
// const p = new Point()
// console.log({p})

/*   使用参数默认值时，函数不能有同名参数   */

// // 不报错
// function foo(x, x, y) {
// // ...
// }
//
// // 报错
// function foo(x, x, y = 1) {
// // ...
// }

// SyntaxError: Duplicate parameter name not allowed in this context

/*   一个容易忽略的地方是，参数默认值不是传值的，而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的   */
//参数 p 的默认值是 x + 1 。这时，每次调用函数 foo ，都会重新计算 x + 1 ，而不是默认 p 等于 100
let x = 99

function foo(p = x++) {
    console.log({p})
}

foo()
x = 100
foo()


/*   与解构赋值默认值结合使用   */

console.log(([][[]]+[])[+!![]]+([]+{})[!+[]+!![]])
