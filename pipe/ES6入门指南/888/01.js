/**
 * @author wuke
 * @date 2018-01-02
 * @Description: Page:1/11  扩展运算符
 */
/*   扩展运算符（spread）是三个点（ ... ）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。   */
console.log(...[1, 2, 3])
console.log(1, ...[2, 3, 4], 5)

// let divArr = [...document.querySelectorAll('div')]
// console.log(divArr)

/*   该运算符主要用于函数调用,运算符将数组变为参数序列   */
function push(array, ...items) {
    array.push(...items)
}

function add(x, y) {
    return x + y
}

const numbers = [4, 38]
add(...numbers)//42

//扩展运算符与正常函数参数可以结合使用，非常灵活
function f(v, w, x, y, z) {
    console.log({v, w, x, y, z})
}

// const args = [0, 1];
// f(-1, ...args, 2, ...[3]);
//扩展运算符可以防止表达式
/*   扩展运算符后面是一个空数组，则不产生任何效果   */
const x = 0
const arr = [
    ...(x > 0 ? ['a'] : []),
    'b',
];
console.log({arr})//x=1时，{ arr: [ 'a', 'b' ] }；x=0时，{ arr: [ 'b' ] }

/*   替代数组的apply方法   */
function f(x, y, z) {
    //...
}

let args = [0, 1, 2]
f(...args)

/*   取最大值   */
Math.max(...[14, 3, 77])
//等同于Math.max(14, 3, 77)


/*   扩展运算符的应用   */
/*   （1）复制数组   */
let arr1 = [0, 1, 2]
let arr2 = [3, 4, 5]
arr1.push(...arr2)
//另一个例子
new Date(...[2019, 1, 2]);

/*   扩展运算符的应用   */
/*   复制数组   */
/*   数组是复合的数据类型，直接复制的话，只是复制了指向底层数据结构的指针，而不是克隆一个全新的数组   */
/*   a2 并不是 a1 的克隆，而是指向同一份数据的另一个指针。修改 a2 ，会直接导致 a1 的变化   */
// const a1 = [1, 2]
// const a2 = a1
// a2[0] = 2
// console.log(a1) //[2,2]
/*   ES5解决方案   */
// const a1 = [1, 2]
// const a2 = a1.concat()
// a2[0] = 2
// console.log(a1) //[1,2]
/*   ES6解决方案   */
// const a1 = [1, 2]
// const a2 = [...a1]//或者const [...a2] = a1


/*   （2）合并数组   */
/*   ES5解决方案   */
// let moreArr = [];
// [1, 2].concat(moreArr);
// /*   ES6解决方案   */
// [1, 2, ...moreArr]
// /*   ES5解决方案   */
// let arr1 = ['a', 'b']
// let arr2 = ['c']
// let arr3 = ['d', 'e']
// arr1.concat(arr2, arr3);
/*   ES6解决方案   */
// [...arr1, ...arr2, ...arr3]

/*   (3)与解构赋值结合   */
/*   扩展运算符可以与解构赋值结合起来，用于生成数组   */
// let list = [1, 2, 3, 4]
/*   ES5解决方案   */
// let a = list[0],
//     rest = list.slice(1);
/*   ES6解决方案   */
// let [a, ...rest] = list
/*   其他   */
// const [first, ...rest] = [1, 2, 3, 4, 5];
// console.log({first, rest}) //{first:1,rest:[2,3,4,5]}
// const [first, ...rest] = [];
// console.log({first, rest}) //{first:undefined,rest:[]}
// const [first, ...rest] = ['foo'];
// console.log({first, rest}) //{first:'foo',rest:[]}
/*   如果扩展运算符被用于数组赋值，只能用于最后一位，否则会报错   */
// const [...butLast, last] = [1, 2, 3, 4, 5];
// 报错

/*   （4）字符串   */
/*   扩展运算符还可以将字符串转为真正的数组   */
// let strArr = [...'hello']
// console.log({strArr})//{strArr: [ "h", "e", "l", "l", "o" ]}
/*   上面的写法，有一个重要的好处，那就是能够正确识别四个字节的 Unicode 字符   */
'x\uD83D\uDE80y'.length;// 4
[...'x\uD83D\uDE80y'].length; // 3

/*   上面代码的第一种写法，JavaScript 会将四个字节的 Unicode 字符，识别为 2 个字符，采用扩展运算符就没有这个问题。因此，正确返回字符串长度的
函数，可以像下面这样写   */
function length(str) {
    return [...str].length;
}

length('x\uD83D\uDE80y') //3
/*   凡是涉及到操作四个字节的 Unicode 字符的函数，都有这个问题。因此，最好都用扩展运算符改写   */
/*   下面代码中，如果不用扩展运算符，字符串的 reverse 操作就不正确   */
let str = 'x\uD83D\uDE80y';
str.split('').reverse().join('');// 'y\uDE80\uD83Dx'
[...str].reverse().join('')// 'y\uD83D\uDE80

/*   (5)实现了Iterator接口的对象   */

/*   任何 Iterator 接口的对象（参阅 Iterator 一章），都可以用扩展运算符转为真正的数组   */
// let nodeList = document.querySelectorAll('div')
// let divArr = [...nodeList]
// console.log({divArr})
/*   上面代码中， querySelectorAll 方法返回的是一个 nodeList 对象。它不是数组，而是一个类似数组的对象。这时，扩展运算符可以将其转为真正的数
组，原因就在于 NodeList 对象实现了 Iterator    */

/*   对于那些没有部署Iterator接口的类似数组的对象，扩展运算符就无法将其转为真正的数组   */
let arrayLike = {
    0:'a',
    1:'b',
    2:'c',
    length:3,
}
// let arrayLikeArr = [...arrayLike]
// console.log({arrayLikeArr})//TypeError: arrayLike is not iterable
/*   上面代码中， arrayLike 是一个类似数组的对象，但是没有部署 Iterator 接口，扩展运算符就会报错。   */
let arrayLikeArr2 = Array.from(arrayLike)
console.log({arrayLikeArr2})//{ arrayLikeArr2: [ 'a', 'b', 'c' ] }
/*   这时，可以改为使用 Array.from 方法将arrayLike 转为真正的数组   */

/*   (6)Map和Set结构，Generator函数   */
/*   扩展运算符内部调用的是数据结构的 Iterator 接口，因此只要具有 Iterator 接口的对象，都可以使用扩展运算符，比如 Map 结构   */
let map = new Map([
    [1,'one'],
    [2,'two'],
    [3,'three'],
])
let mapKeyArr = [...map.keys()]
let mapValueArr = [...map.values()]
console.log({mapKeyArr})
console.log({mapValueArr})

/*   Generator函数运行后，返回一个遍历器对象，因此也可以使用扩展运算符   */
const go = function*() {
    yield 1;
    yield 2;
    yield 3
};
let goArr = [...go()]
console.log({goArr})
/*   上面代码中，变量 go 是一个 Generator 函数，执行后返回的是一个遍历器对象，对这个遍历器对象执行扩展运算符，就会将内部遍历得到的值，转为一
个数组   */

/*   如果对没有Iterator接口的对象，使用扩展运算符，将会报错   */
const obj = {a:1,b:2}
let objArr = [...obj]
console.log({objArr})//TypeError: obj is not iterable
