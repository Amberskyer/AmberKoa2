/**
 * @author wuke
 * @date 2019-01-999
 * @Description: Page:5/15  Class表达式
 */
/*   (start:)(tips:)跟函数一样，类也可以使用表达式的形式定义   */
const MyClass = class Me{
    getClassName(){
        return Me.name
    }
}
/*   (tips:)上面代码使用表达式定义了一个类。需要注意的是，这个类的名字是MyClass而不是Me，Me只在Class的内部代码可用，指代当前类   */
let inst = new MyClass
inst.getClassName() //Me
// Me.name //ReferenceError: Me is not defined
//TODO:实际打印出的名字是Me而不是MyClass
MyClass.name //Me
/*   (tips:)上面代码表示，Me只在Class内部有定义。如果类的内部没用到的话，可以省略Me，也可以下城下面的形式   */
const MyClass2 = class{
    getClassName(){
        return this.name
    }
}
let inst2 = new MyClass2
inst2.getClassName()//undefined
MyClass2.name //MyClass2
/*   (end:)   */

/*   (start:)(important:)才用Class表达式，可以写出立即执行的Class   */
let person = new class {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}('张三');
person.sayName();
/*   (end:)上面的代码中，person是一个立即执行的类的实例   */