/**
 * @author wuke
 * @date 2019-01-04
 * @Description: Page:10/11  数组的空位
 */
/*   (start:)(tips:)数组的空位值，数组的某一个位置没有任何值。比如，Array构造函数返回的数组都是空位   */
Array(3);//[,,,]
/*   (tips:)注意，空位不是undefined，一个位置的值等于undefined，依然是有值的。空位是没有任何值，in运算符可以说明这一点   */
0 in [undefined, undefined, undefined];//true
0 in [, , ,];//false
/*   (end:)上面的代码说明，第一个数组的0号位置是有值的，第二个数组的0号位置没有值   */


/*   (start:)(tips:)ES5 对空位的处理，已经很不一致了，大多数情况下会忽略空位。
forEach() , filter() , every() 和 some() 都会跳过空位。
map() 会跳过空位，但会保留这个值
join() 和 toString() 会将空位视为 undefined ，而 undefined 和 null 会被处理成空字符串   */
//forEach()
[, 'a'].forEach((x, i) => console.log(i));//i
//filter() TODO:未使用过
['a', , 'b'].filter(x => true);//['a','b']
//every() TODO:未使用过
[, 'a'].every(x => x === 'a');//true
//some() TODO:未使用过
[, 'a'].some(x => x !== 'a');//fasle
//map()
[, 'a'].map((x, i) => 1);//[ <1 empty item>, 1 ]
//join() TODO:未使用过
[, 'a', undefined, null].join('#'); //#a##
//toString() TODO:未使用过
[, 'a', undefined, null,].toString()//,a,,
/*   (end:)   */

/*   (start:)(tips:)ES6则是明确将空位转为undefined   */
/*   (tips:)Array.from方法会将数组的空位，转为undefined，也就是说，这个方法不会忽略空位   */
Array.from([, 'a', 'b']);//[ undefined, 'a', 'b' ]
/*   (tips:)扩展运算符(...)也会将空位转为undefined   */
[...['a', , 'b']];//[ 'a', undefined, 'b' ]
/*   (important:)copyWithin() 会连空位一起拷贝(彻底复制)   */
[, 'a', 'b', ,].copyWithin(2, 0);//[ <1 empty item>, 'a', <1 empty item>, 'a' ]
/*   (tips:)fill()会讲空位视为正常的数组位置   */
new Array(3).fill('a') //[ 'a', 'a', 'a' ]
/*   (tips:)for...of循环也会遍历空位   */
let arr = [, ,]
for (let i of arr) {
    console.log(i)
}
//undefined
// undefined
/*   (important:)上面代码中，数组 arr 有两个空位， for...of 并没有忽略它们,但是空位被视为undefined。如果改成 map 方法遍历，空位是会跳过的   */

/*   (start:)(important:)entries() 、 keys() 、 values() 、 find() 和 findIndex() 会将空位处理成 undefined   */
//entries() TODO:未使用过
[...[, 'a'].entries()];//[ [ 0, undefined ], [ 1, 'a' ] ]
//keys() TODO:未使用过
[...[, 'a'].keys()];//[ 0, 1 ]
//values() TODO:未使用过
//TODO:代码报错
// [...[, 'a'].values()];//[undefined,"a"]
//find() TODO:未使用过(返回第一个元素)
[, 'a'].find(x => true);//undefined
//findIndex() TODO:未使用过
[, 'a'].findIndex(x => true); //0
/*   (end:)(important:)由于空位的处理规则非常不统一，所以建议避免出现空位   */
