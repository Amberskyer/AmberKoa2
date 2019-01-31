/**
 * @author wuke
 * @date 2019-01-07
 * @Description: Page:4/15  constructor方法
 */
/*   (start:)(important:)constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。
一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加   */

// class Point {
//
// }
// //等同于
// class Point {
//     constructo(){
//
//     }
// }
/*   (end:)(tips:)上面代码中，定义了一个空的类Point，JavaScript引擎会自动为它添加一个空的constructor方法   */





/*   (start:)(important:)constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象   */
// class Foo {
//     constructor(){
//         return Object.create(null)
//     }
// }
//
// new Foo() instanceof Foo ; //false
/*   (important:)instanceof表示判断前者是否是后者的实例   */
/*   (end:)上面代码中，constructor函数返回一个全新的对象，结果导致实例对象不是Foo类的实例   */


/*   (start:)(important:)类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行   */
class Foo{
    constructor(){
        // ...
    }
}

Foo() //TypeError: Class constructor Foo cannot be invoked without 'new'