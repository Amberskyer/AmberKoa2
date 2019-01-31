/**
 * @author wuke
 * @date 2019-01-07
 * @Description: Page:4/15  类的实例对象
 */
/*   (start:)生成类的实例对象的写法，与ES5完全一样，也是使用new命令。   */
// class Point {
//     //...
// }
// let point1 = new Point(1,2) //正确
// let point2 =  Point(1,2)//报错
/*   (end:)前面说过，如果忘记加上new，像函数那样调用Class，将会报错   */


/*   (start:)(important:)与 ES5 一样，实例的属性除非显式定义在其本身（即定义在 this 对象上），否则都是定义在原型上（即定义在 class 上）   */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

let point = new Point(1, 2)
point.toString() // (1,2)
point.hasOwnProperty('x') //true
point.hasOwnProperty('y')//true
point.hasOwnProperty('toString')//false
point.__proto__.hasOwnProperty('toString')//true
/*   (end:)(important:)上面代码中，x和y都是实例对象point自身的属性(因为定义在this变量上)，
所以hasOwnProperty方法返回true，而toString是原型对象的属性(因为定义在Point类上)，所以hasOwnProperty方法返回false。
这些都与ES5的行为保持一致   */


/*   (start:)   */
let p1 = new Point(1, 2)
let p2 = new Point(1, 2)

p1.__proto__ === p2.__proto__ //true
/*   (tips:)上面代码中，p1和p2都是Point的实例，它们的原型都是Point.prototype,所以__proto__属性是相等的   */
/*   (important:)这也意味着，可以通过实例的__proto__属性为"类"添加方法   */
/*   (important:)__proto__ 并不是语言本身的特性，这是各大厂商具体实现时添加的私有属性，虽然目前很多现代浏览器的 JS 引擎中都提供了这个私有属
性，但依旧不建议在生产中使用该属性，避免对环境产生依赖。生产环境中，我们可以使用 Object.getPrototypeOf 方法来获取实例对象
的原型，然后再来为原型添加方法/属性   */
let p1 = new Point(2, 3)
let p2 = new Point(3, 2)
p1.__proto__.printName = function () {
    return 'Oops'
};
p1.printName()//"Oops"
p2.printName()//"Oops"
let p3 = new Point(4, 2)
p3.printName()//"Oops"
/*   (end:)(tips:)上面代码在 p1 的原型上添加了一个 printName 方法，由于 p1 的原型就是 p2 的原型，因此 p2 也可以调用这个方法。而且，此后新建的实例 p3 也可以调用
这个方法。这意味着，使用实例的 __proto__ 属性改写原型，必须相当谨慎，不推荐使用，因为这会改变“类”的原始定义，影响到所有实例   */

















