/**
 * @author wuke
 * @date 2019-1-3
 * @Description: Page:5/11  Array.from()
 */
/*   (start:)Array.from 方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set和 Map）   */
/*   (tips:)可遍历（iterable）可使用[...]   */
let arrayLike = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
}
let arrayLikeArr = Array.from(arrayLike)
console.log({arrayLikeArr})//{ arrayLikeArr: [ 'a', 'b', 'c' ] }
/*   (end:)   */

/*   (start:)实际应用中，常见的类似数组的对象是 DOM 操作返回的 NodeList 集合，以及函数内部的 arguments 对象。 Array.from 都可以将它们转为真正的数组   */
// NodeList
// let psArr = document.querySelectorAll('p')
// Array.from(psArr).forEach(function (pItem) {
//     console.log(pItem);
// })
// arguments对象
function foo() {
    var args = Array.from(arguments); // ..
}
/*   (end:)上面代码中， querySelectorAll 方法返回的是一个类似数组的对象，可以将这个对象转为真正的数组，再使用 forEach 方法   */

/*   (start:)只要是部署了Iterator接口的数据结构，Array.from都能将其转为数组   */
let strArr = Array.from('hello')
console.log({strArr})//{ strArr: [ 'h', 'e', 'l', 'l', 'o' ] }

let nameSet = new Set(['a','b'])
let nameSetArr = Array.from(nameSet)
console.log({nameSetArr})//{ nameSetArr: [ 'a', 'b' ] }
/*   (end:)上面代码中，字符串和 Set 结构都具有 Iterator 接口，因此可以被 Array.from 转为真正的数组   */

/*   (start:)如果参数是一个真正的数组，Array.from会返回一个一模一样的新数组   */
let nArr = Array.from([1,2,3])
console.log({nArr})//{ nArr: [ 1, 2, 3 ] }
/*   (tips:)值得提醒的是，扩展运算符（...）也可以将某些数据结构转为数组   */
//arguments对象
function foo() {
    const args = [...arguments]
}
//NodeList对象
// [...document.querySelectorAll('div')]
/*   (end:)   */

/*   (start:)(tips:)扩展运算符背后调用的是遍历器接口（ Symbol.iterator ），如果一个对象没有部署这个接口，就无法转换。 Array.from 方法还支持类似数组的对象。
所谓类似数组的对象，本质特征只有一点，即必须有 length 属性。因此，任何有 length 属性的对象，都可以通过 Array.from 方法转为数组，而此时扩展运算符就无法转换。   */
let lArr = Array.from({length:3})
console.log({lArr})//{ lArr: [ undefined, undefined, undefined ] }
/*   (end:)上面代码中， Array.from 返回了一个具有三个成员的数组，每个位置的值都是 undefined 。扩展运算符转换不了这个对象   */

/*   (start:)(important:)Array.from 还可以接受第二个参数，作用类似于数组的 map 方法，用来对每个元素进行处理，将处理后的值放入返回的数组   */
Array.from(arrayLike, x => x * x);// 等同于Array.from(arrayLike).map(x => x * x
let nArr2  = Array.from([1,2,3],x => x*x);
console.log({nArr2})//{ nArr2: [ 1, 4, 9 ] }
/*   (end:)   */
