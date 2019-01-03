/**
 * @author wuke
 * @date 2019-01-03
 * @Description: Page:7/11  Array.of()
 */

/*   (start:)Array.of 方法用于将一组值，转换为数组   */
Array.of(3, 11, 8)//[3,11,8]
Array.of(3)//[3]
Array.of(3).length//1
/*   (tips:)这个方法的主要目的，是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异   */
console.log(Array());//[]
console.log(Array(3));//[,,,]
console.log(Array(3, 11, 8));//[3,8,11]
/*   (tips:)上面代码中， Array 方法没有参数、一个参数、三个参数时，返回结果都不一样。只有当参数个数不少于 2 个时， Array() 才会返回由参数组成的新数组。
参数个数只有一个时，实际上是指定数组的长度   */
/*   (important:)Array.of 基本上可以用来替代 Array() 或 new Array() ，并且不存在由于参数不同而导致的重载。它的行为非常统一   */
Array.of()//[]
Array.of(undefined)//[undefined]
Array.of(1)//[1]
Array.of(1, 2)//[1,2]
/*   (tips:)Array.of总是返回参数值组成的数组。如果没有参数，就返回一个空数组   */
/*   (important:)Array.of 方法可以用下面的代码模拟实现   */
// function ArrayOf() {
//     return [].slice.call(arguments)
// }