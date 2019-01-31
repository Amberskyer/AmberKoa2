/**
 * @author wuke
 * @date 2019-01-21
 * @Description: Page:8/15  name属性
 */

/*   (start:)由于本质上，ES6的类只是ES5的构造函数的一层包装，所以函数的许多特性都被Class继承，包括name属性   */
(function () {
    class Point{}
    Point.name//Point
})();
/*   (end:)name属性总是返回紧跟在class关键字后面的类名   */
