/**
 * @author wuke
 * @date 2018-12-30
 * @Description: Page:6/11  函数参数的解构赋值
 */

// function add([x, y]) {
//     return x + y
// }

// let num = add([1, 2])
// console.log({num})//{ num: 3 }

// let sumArr = [[1, 2], [3, 4]].map(([a, b]) => a + b)
// console.log({sumArr})//// [ 3, 7 ]

/*   函数 move 的参数是一个对象，通过对这个对象进行解构，得到变量 x 和 y 的值。如果解构失败， x 和 y 等于默认值   */
// function move({x = 0, y = 0, z = 0} = {}) {
//     console.log([x, y, z])
// }
//
// move({x: 3, y: 8, z: null}) // [ 3,8,null ]
// move({x: 3}) //[ 3, 0, 0 ]
// move({}) //[ 0, 0, 0 ]
// move() // [ 0,0 ,0]

/*   函数 move 的参数指定默认值，而不是为变量 x 和 y 指定默认值，所以会得到与前一种写法不同的结果   */
function move({x, y, z} = {x: 0, y: 0}) {
    console.log([x, y, z])
}

move({x: 3, y: 8, z: null})//[ 3, 8, null ]
move({x: 3})//[ 3, undefined, 1 ]
move({})//[ undefined, undefined, 1 ]
move()//[ 0, 0, 1 ]


// let nArr = [1, undefined, 3].map((item = "yes") => item)
// console.log({nArr})