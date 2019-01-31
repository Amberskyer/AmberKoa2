/**
 * @author wuke
 * @date 2019-01-21
 * @Description: Page:9/15  Class 的 Generator 方法
 */

/*   (start:)如果某个方法之前加上星号(*)，就表示该方法是一个Generator函数   */
(function () {
    class Foo {
        constructor(...args){
            this.args = args
        }
        *[Symbol.iterator](){
            for(let arg of this.args){
                yield arg
            }
        }
    }

    for (let x of new Foo('hello','world')) {
        console.log(x)
    }
    // hello
    // world
})();
/*   (end:)上面代码中，Foo类的Symbol.iterator方法钱有一个星号，表示该方法是一个Generator函数。Symbol.iterator方法返回一个Foo类的默认遍历器，for...of循环会自动调用这个遍历器   */

