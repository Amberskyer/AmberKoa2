let dataArr = [
    {id: "1", parent: "0", name: "福建省高级人民法院管辖区"},
    {id: "2", parent: "1", name: "福州市中级人民法院管辖区"},
    {id: "3", parent: "1", name: "厦门市中级人民法院管辖区"},
    {id: "4", parent: "2", name: "莆田市中级人民法院管辖区"},
    {id: "5", parent: "1", name: "三明市中级人民法院管辖区"},
    {id: "7", parent: "4", name: "漳州市中级人民法院管辖区"},
    {id: "8", parent: "1", name: "南平市中级人民法院管辖区"},
    {id: "9", parent: "4", name: "宁德市中级人民法院管辖区"},
    {id: "10", parent: "1", name: "龙岩市中级人民法院管辖区"},
    {id: "73924610", parent: "5", name: "办公室"},
    {id: "6", parent: "5", name: "办公室"},
    {id: "7", parent: "6", name: "办公室"},
    {id: "8", parent: "7", name: "办公室"},
    {id: "9", parent: "8", name: "办公室"},
    {id: "73924611", parent: "5", name: "立案庭"}
]


let nDataArr = buildTree(dataArr)

function f() {
    for(let i in nDataArr){
        console.log({i})
    }
}


function buildTree(list) {
    let temp = {};
    let tree = {};
    for (let i in list) {
        temp[list[i].id] = list[i];
    }

    for (let i in temp) {
        // console.log(i, temp[i])
        if (temp[i].parent && temp[temp[i].parent]) {
            if (!temp[temp[i].parent].children) {
                temp[temp[i].parent].children = new Object();
            }
            temp[temp[i].parent].children[temp[i].id] = temp[i];
        } else {
            // console.log(temp[i])
            tree[temp[i].id] = temp[i];
        }
    }
    return tree;
}
//
// let mod = {
//     a: 11,
//     b: 22
// }
//
// let tree = {c: mod}
// console.log({tree})
// mod.a = 33
// console.log({tree})
