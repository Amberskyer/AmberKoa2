/**
 * @author wuke
 * @date 2018-12-30
 * @Description: Page:4/11  对象的结构赋值
 */
// let {foo, bar} = {foo: 'aaa', bar: 'bbb'}
// console.log({foo, bar})//{foo: 'aaa', bar: 'bbb'}
/*   只对应name，与顺序无关   */
// let {bar, foo} = {foo: 'aaa', bar: 'bbb'}
// console.log({foo, bar})//{foo: 'aaa', bar: 'bbb'}
// let {baz} = {foo: 'aaa', bar: 'bbb'}
// console.log({baz})//{baz: undefined'}

/*   倘若需要改name，以键值对的形式表示   */
// let {foo: baz} = {foo: 'aaa', bar: 'bbb'}
// console.log({baz})//{ baz: 'aaa' }
// let obj = {first: 'hello', last: 'world'}
// let {first: f, last: l} = obj
// console.log({f, l})//{ f: 'hello', l: 'world' }
/*   这实际上说明，对象的解构赋值是下面形式的简写（参见《对象的扩展》一章）   */
// let {foo: foo, bar: bar} = {foo: 'aaa', bar: 'bbb'}
/*   也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者   */
// let {foo: baz} = {foo: 'aaa', bar: 'bbb'}
// console.log({baz})//{baz:'aaa'}
// console.log({foo})//error: foo is not defined
/*   与数组一样，解构也可以用于嵌套结构的对象   */
// let obj = {
//     p: [
//         'hello',
//         {y: 'world'}
//     ]
// }
// let {p: [x, {y}]} = obj
// console.log({p})//p is not defined
// console.log({x, y})//{ x: 'hello', y: 'world' }
/*   注意，这时 p 是模式，不是变量，因此不会被赋值。如果 p 也要作为变量赋值，可以写成下面这样   */
// let obj = {
//     p: [
//         'hello',
//         {y: 'world'}
//     ]
// }
// let {p, p: [x, {y}]} = obj
// console.log({p})//{ p: [ 'hello', { y: 'world' } ] }
// console.log({x, y})//{ x: 'hello', y: 'world' }
/*   下面是另一个例子   */
// const node = {
//     loc:{
//         start:{
//             line:1,
//             column:5
//         }
//     }
// }
// let {loc,loc:{start},loc:{start:{line}}} = node
// console.log(loc)//{ start: { line: 1, column: 5 }
// console.log(start)//{ line: 1, column: 5 }
// console.log(line)//1

/*   下面是嵌套赋值的例子   */
//TODO:arr is not defined，与书中的结果不同
// let obj = {}
// let arr = []
// ({foo: obj.prop, bar: arr[0]} = {foo: 123, bar: true})
// console.log({obj})
// console.log({arr})

/*   对象的结构也可以指定默认值   */
// let {x = 3} = {}
// console.log({x})//{ x: 3 }

// let {x, y = 5} = {x: 1}
// console.log({x, y}) //{ x: 1, y: 5 }

// let {x: y = 3} = {}
// console.log({y})//{ y: 3 }

// let {x: y = 3} = {x: 5}
// console.log({y})//{ y: 5 }

// let {message: msg = 'Something went wrong'} = {}
// console.log({msg})//{ msg: 'Something went wrong' }

/*   默认值生效的条件是，对象的属性值严格等于 undefined   */
// let {x = 3} = {x: undefined}
// console.log({x})//{x: 3}

// let {x = 3} = {x: null}
// console.log({x})//{x: null}

// let {foo} = {bar: 'baz'}
// console.log({foo})//{ foo: undefined }
/*   下面代码中，等号左边对象的 foo 属性，对应一个子对象。该子对象的 bar 属性，解构时会报错。原因很简单，因为 foo 这时等于 undefined ，再取子属性就会报错   */
// let {foo: {bar}} = {baz: 'baz'}
// console.log({bar})// Cannot destructure property `bar` of 'undefined' or 'null'.

/*   下面代码的写法会报错，因为 JavaScript 引擎会将 {x} 理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免 JavaScript 将其解释为
代码块，才能解决这个问题。   */
// let x ;
// {x} = {x: 1};
// SyntaxError: syntax error
// ({x} = {x:1})

/*   对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量   */
// let {log ,sin ,cos } = Math
// console.log(sin(30))//-0.9880316240928618

/*   由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构   */
// let arr = [1,2,3]
// let {0:first,[arr.length-1]:last} = arr
// console.log({first,last})//{ first: 1, last: 3 }