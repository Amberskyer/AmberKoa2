/**
 * @author wuke
 * @date 2019-01-09
 * @Description: Page:6/11  不存在变量提升
 */
/*   (start:)类不存在变量提升(hoist),这一点与ES5完全不同   */
// new Foo() //ReferenceError: Foo is not defined
// class Foo {
//
// }
/*   (end:)上面代码中,Foo类使用在前，定义在后，这样会报错，因为ES6不会把类的声明提升到代码头部。这种规定的原因与下文要提到的继承有关，必须保证之类在父类之后定义   */

/*   (start:)下面的代码不会报错，因为Bar继承Foo的实时，Foo已经有定义了。
但是，如果存在class的提升，下面的代码会报错，因为class会被提升到代码头部，而let命令是不提升的，所以导致Bar继承Foo的时候，Foo还没有定义   */
f()
function f() {
    let Foo = class{};
    class Bar extends Foo{

    }
}
/*   (end:)   */




