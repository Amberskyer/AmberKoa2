// import "./../../../public/javascripts/jquery.min"
/**
 * @author wuke
 * @date 2018-12-30
 * @Description: Page:8/11  用途
 */

/*   （1）交换变量的值   */
// let x = 1;
// let y = 2;
// [x, y] = [y, x];
// console.log({x, y})

/*   （2）从函数返回多个值   */
//返回一个数组
// function example() {
//     return [1,2,3]
// }
// let [a,b,c] = example()
// console.log({a,b,c})
//返回一个对象
// function example() {
//     return {
//         foo: 1,
//         bar: 2
//     }
// }
//
// let {foo, bar} = example()
// console.log({foo, bar})

//函数参数的定义
// function f([x, y, z]) {
// }
// f([1, 2, 3])

//参数是一组无次序的值
// function f({x, y, z}) {
// }
// f({z: 3, y: 2, x: 1})

/*   提取JSON数据   */
// let jsonData = {
//     id: 42,
//     status: "OK",
//     data: [867, 5309]
// }
// let {id, status, data: number} = jsonData
// console.log({id, status, number})

/*   函数参数的默认值   */
// jQuery.ajax = function (url, {async = true,
//     beforeSend = function () {},
//     cache = true,
//     complete = function () {},
//     crossDomain = false,
//     global = true,
// }){
//
// }

/*   遍历Map结构   */
//任何部署了 Iterator 接口的对象，都可以用 for...of 循环遍历。Map 结构原生支持 Iterator 接口，配合变量的解构赋值，获取键名和键值就非常方便
const map = new Map()
map.set("first", 'hello')
map.set("second", 'world')

for (let [key, value] of map) {
    console.log(key + " is " + value)
}
//获取键名
for (let [key] of map) {
    console.log(key)
}
//获取键值
for (let [, value] of map) {
    console.log(value)
}

/*   输入模块的指定方法   */
const {SourceMapConsumer, SourceNode} = require("source-map");