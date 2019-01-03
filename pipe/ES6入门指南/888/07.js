/**
 * @author wuke
 * @date 2019-01-03
 * @Description: Page:9/11  数组实例的 entries()，keys() 和 values()
 */
/*   (start:)(tips:)ES6 提供三个新的方法—— entries() ， keys() 和 values() ——用于遍历数组。它们都返回一个遍历器对象（详见《Iterator》一章），可以用for...of 循环进行遍历，唯一的区别是 keys() 是对键名的遍历、 values() 是对键值的遍历， entries() 是对键值对的遍历   */
for (let index of ['a', 'b'].keys()) {
    console.log(index)
}
// 0
// 1

/*   (important:)TODO:书中代码报错   */
for (let elem of new Set(['a', 'b']).values()) {
    console.log(elem);
}
//'a'
//'b'

for (let ent of ['a', 'b'].entries()) {
    console.log(ent);
}
//[ 0, 'a' ]
//[ 1, 'b' ]

for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index, elem);
}
//0 'a'
//1 'b'


let letter = ['a', 'b', 'c'];
let entries = letter.entries();
console.log(entries.next().value); // [0, 'a']
console.log(entries.next().value); // [1, 'b']
console.log(entries.next().value); // [2, 'c']
console.log(entries.next().value); // undefined