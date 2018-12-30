/**
 * @author wuke
 * @date 2018-12-30
 * @Description: Page:2/11  数组的结构赋值
 */

let [a, b, c] = [1, 2, 3]
console.log({a})

let [a, [b], c] = [1, [2, 3], 4]
console.log({b})

let [x, y, z] = new Set(['a', 'b', 'c'])
console.log({x})


//TODO:不懂
function* fibs() {
    let a = 0
    let b = 1
    while (true) {
        yield a;
        [a, b] = [b, a + b]
    }
}

let [first, second, third, fourth, fifth, sixth] = fibs()
console.log({first, second, third, fourth, fifth, sixth})

/**
 * @author wuke
 * @date 2018-12-30
 * @Description: Page:3/11
 */

let [foo = true] = []
console.log({foo})

let [x, y = 'b'] = ['a']
console.log({x, y})


let [x, y = 'b'] = ['a', undefined]
console.log({x, y})

/*  注意，ES6 内部使用严格相等运算符（ === ），判断一个位置是否有值。所以，如果一个数组成员不严格等于 undefined ，默认值是不会生效的  */

let [x = 1] = [undefined];
console.log({x})

let [x = 1] = [null];
console.log({x})

/*  如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值    */
function f() {
    console.log('aaa')
    return 5
}

let [x = f()] = [1]
console.log({x})//{x:1} 1不为undefined，所以不会走f()
let [x = f()] = [undefined]
console.log({x})//{x:5} undefined，所以会走f()
/*  上面代码中，因为 x 能取到值，所以函数 f 根本不会执行。上面的代码其实等价于下面的代码   */
let x;
if ([1][0] === undefined) {
    x = f();
} else {
    x = [1][0]
}

/*  默认值可以引用解构赋值的其他变量，但该变量必须已经声明 */
let [x = 1, y = x] = []
console.log({x, y})//{x:1,y:1}
let [x = 1, y = x] = [2]
console.log({x, y})//{x:2,y:2}
let [x = 1, y = x] = [1, 2]
console.log({x, y})//{x:1,y:2}
let [x = y, y = 1] = []
console.log({x, y})//ReferenceError(引用错误)x的时候，y还未定义



