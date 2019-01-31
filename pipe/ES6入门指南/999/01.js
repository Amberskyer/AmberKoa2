/**
 * @author wuke
 * @date 2019-1-18
 * @Description: Page:1/11  属性的简介表示法
 */

/*   (start:)ES6允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁   */
(function () {
    const foo = 'bar'
    const baz = {foo}
    baz //{foo:'bar'}
//等同于
    const baz2 = {foo: foo}
})();
/*   (end:)上面的代码标明，ES6允许在对象之中，直接写变量。这是，属性名为变量名，属性值为变量的值   */

/*   (start:)   */
(function () {

    function f(x, y) {
        return {x, y}
    }

    //等同于
    function f1(x, y) {
        return {x: x, y: y}
    }

    f(1, 2) // {x: 1, y: 2}
})();
/*   (end:)   */

/*   (start:)除了属性简写，方法也可以简写   */
(function () {
    const o = {
        metod() {
            return 'Hello!'
        }
    }
    //等同于
    const o1 = {
        method: function () {
            return 'Hello!'
        }
    }
})();
/*   (end:)   */


/*   (start:)下面是一个实际的例子  */
(function () {
    let birth = '1992/04/15'
    const Person = {
        name: "Mizuna-rei",
        birth,
        hello() {
            console.log('我的名字是', this.name)
        }
    }
    Person.hello() //我的名字是 Mizuna-rei
})();
/*   (end:)   */

/*   (start:)这种写法用于函数的返回值，将会非常方便   */
(function () {
    function getPoint() {
        const x = 1;
        const y = 2;
        return {x, y}
    }

    getPoint();//{x: 1, y: 2}
})();
/*   (end:)   */

/*   (start:)CommonJS模块输出一组变量，就非常合适使用简介写法   */
(function () {
    let ms = {};

    function getItem(key) {
        return key in ms ? ms[key] : null
    }

    function setItem(key, value) {
        ms[key] = value
    }

    function clear() {
        ms = {}
    }

    module.exports = {getItem, setItem, clear};
    //等同于
    module.exports = {
        getItem: getItem,
        setItem: setItem,
        clear: clear,
    }


})();
/*   (end:)   */

/*   (start:)属性的赋值器(setter)和取值器(getter)，事实上也是采用这种写法   */
(function () {
    const cart = {
        _wheels :4,
        get wheels(){

        }
    }
})();