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