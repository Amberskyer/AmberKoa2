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
}

const args = [0, 1];
f(-1, ...args, 2, ...[3]);
//扩展运算符可以防止表达式
/*   扩展运算符后面是一个空数组，则不产生任何效果   */
const x = 0
const arr = [
    ...(x > 0 ? ['a'] : []),
    'b',
];
console.log({arr})//x=1时，{ arr: [ 'a', 'b' ] }；x=0时，{ arr: [ 'b' ] }