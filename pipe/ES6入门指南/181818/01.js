/**
 * @author wuke
 * @date 2019-01-04
 * @Description: Page:1/11  简介
 */


/*   (start:)(important:)JavaScript 语言中，生成实例对象的传统方法是通过构造函数。下面是一个例子   */
function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function () {
    return '(' + this.x + ',' + this.y + ')'
}

let p = new Point(1, 2)
console.log(p.toString())//(1,2)
/*   (end:)上面这种写法跟传统的面向对象语言（比如 C++ 和 Java）差异很大，很容易让新学习这门语言的程序员感到困惑   */





/*   (start:)ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过 class 关键字，可以定义类   */

/*   (tips:)基本上，ES6 的 class 可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的 class 写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。
上面的代码用 ES6 的 class 改写，就是下面这样   */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ',' + this.y + ')'
    }
}

/*   (tips:)注意，定义“类”的方法的时候，前面不需要加上 function 这个关键字，直接把函数定义放进去了就可以了。另外，方法之间不需要逗号分隔，加了会报错。   */
/*   (important:)ES6 的类，完全可以看作构造函数的另一种写法   */

typeof Point //function
Point === Point.prototype.constructor //true
/*   (important:)上面的代码标明，类的是数据类型就是function，类本身就指向构造函数   */
/*   (end:)   */






/*   (start:)使用的时候，也是直接对类使用new命令，跟构造函数的用法完全一致   */
class Bar {
    doStuff() {
        console.log('stuff')
    }
}

let b = new Bar()
b.doStuff()//stuff
/*   (end:)   */







/*   (start:)(important:)构造函数的prototype属性，在ES6的"类"上面继续存在。事实上，类的所有方法都定义在类的prototype属性上面   */
class Point {
    constructor() {
    }

    toString() {
    }

    toValue() {
    }
}

/*   (important:)上面的写法等同于下面的   */
Point.prototype = {
    constructor() {
    },
    toString() {
    },
    toValue() {
    },
}

/*   (end:)   */







/*   (start:)(tips:)在类的实例上面调用方法，其实就是调用原型上的方法   */
class B {

}

let b = new B()
b.constructor = B.prototype.constructor //true
/*   (end:)(tips:)上面代码中，b是B的实例，它的constructor方法就是B类原型的constructor方法   */







/*   (start:)(important:)由于类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。Object.assign方法可以很方便地一次向类添加多个方法   */
class Point {
    constructor() {

    }
}

Object.assign(Point.prototype, {
    toString() {
    },
    toValue() {
    }
})
/*   (tips:)prototype 对象的 constructor 属性，直接指向“类”的本身，这与 ES5 的行为是一致的   */
Point.prototype.constructor === Point //true
/*   (end:)   */










/*   (start:)(tips:)另外，类的内部所有定义的方法，都是不可枚举的(non-enumerable)   */
class Point {
    constructor(x, y) {
    }

    toString() {

    }
}

Object.keys(Point.prototype)//[]
Object.getOwnPropertyNames(Point.prototype)//["constructor","toString"]
/*   (tips:)上面代码中，toString方法是Point类内部定义的方法，它是不可枚举的。这一点与ES5的行为不一致   */
var Point = function (x,y) {

}

Point.prototype.toString = function () {

}

Object.keys(Point.prototype)//["toString"]
Object.getOwnPropertyNames(Point.prototype)//["constructor","toString"]
/*   (end:)(tips:)上面代码采用ES5的写法，toSting()方法就是可枚举的   */










/*   (start:)类的属性名，可以才用表达式   */
let methodName = 'getArea';
class Square {
    constructor(length){

    }
    [methodName](){

    }
}
/*   (end:)上面代码中， Square 类的方法名 getArea ，是从表达式得到的   */