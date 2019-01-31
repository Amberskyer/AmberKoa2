/**
 * @author wuke
 * @date 2019-01-21
 * @Description: Page:9/15  Class的静态方法
 */

/*   (start:)类相当于实例的原型，所有在类中定义的方法，都会被实例继承。
如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为"静态方法"   */
(function () {
    class Foo{
        static classMethod(){
            return 'hello'
        }
    }
    Foo.classMethod() //'hello'

    var foo = new Foo()
    foo.classMethod() //foo.classMethod is not a function
});
/*   (end:)上面代码中，Foo类的classMethod方法前有static关键字，表明该方法是一个静态方法，可以直接在Foo类上调用(Foo.classMethod())，而不是在Foo类的实例上调用。
如果在实力上调用静态方法，会抛出一个错误，表明不存在该方法   */


/*   (start:)注意，如果静态方法包含this关键字，这个this指的是类，而不是实例   */