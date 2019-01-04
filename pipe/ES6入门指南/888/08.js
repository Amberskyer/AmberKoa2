/**
 * @author wuke
 * @date 2019-01-03
 * @Description: Page:9/11  数组实例的 includes()
 */
/*   (start:)(tips:)Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。ES2016引入了该方法   */
[1, 2, 3].includes(2);//true
[1, 2, 3].includes(4);//false
[1, 2, NaN].includes(NaN);//true
/*   (tips:)该方法的第二个参数表示搜索的起始位置，默认为0，如果第二个参数为负数，则表示倒数的位置，如果这是它大于数组长度(比如第二个参数为-4，但数组长度为3)，则会重置为从0开始   */
[1, 2, 3].includes(3, 3);//false
[1, 2, 3].includes(3, -1).log;//true
/*   (end:)   */

/*   (tips:)另外，Map 和 Set 数据结构有一个 has 方法，需要注意与 includes 区分。
Map 结构的 has 方法，是用来查找键名的，比如 Map.prototype.has(key) 、 WeakMap.prototype.has(key) 、 Reflect.has(target,
propertyKey) 。
Set 结构的 has 方法，是用来查找值的，比如 Set.prototype.has(value) 、 WeakSet.prototype.has(value)   */