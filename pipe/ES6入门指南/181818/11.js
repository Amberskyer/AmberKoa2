/**
 * @author wuke
 * @date 2019-01-18
 * @Description: Page:8/15  Class 的取值函数（getter）和存值函数（setter）
 */

/*   (start:)与ES5一样，在"类"的内部使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为   */
(function () {
    class MyClass{
        constructor(){
            //...
        }
        get prop(){
            return 'getter'
        }
        set prop(value){
            console.log('setter:'+value)
        }
    }
    let inst = new MyClass()
    inst.prop = 123 ;//setter:123
    inst.prop //getter
})();
/*   (end:)上面代码中，prop属性有对应的存值函数和取值函数，因此赋值和读取行为都被自定义了   */

/*   (start:)存值函数和取值函数是设置在属性的Descriptor对象上的   */
//TODO:不懂
(function () {
    class CustomHTMLElement{
        constructor(element){
            this.element = element
        }
        get html(){

        }
        set html(value){
            this.element.innerHTML = value
        }
    }
    let descriptor = Object.getOwnPropertyDescriptor(
        CustomHTMLElement.prototype,'html'
    )
    'get' in descriptor
    'set' in descriptor
})
/*   (end:)上面代码中，存值函数和取值函数是定义在html属性的描述对象上面，这与ES5完全一致   */