const szsJSON = require("./苏州市")
const xszsJSON = require("./新苏州市")
const echartsUtil = require("../utils/echartsUtil")

var fs = require('fs'),
    util = require('util'),
    path = 'C:/Users/Ambersky_keke/OneDrive/qt-data';


let newJSON =  echartsUtil.decode(szsJSON)

let txt = JSON.stringify(newJSON)

fs.writeFile("新苏州市.json", txt, function (err) {
    if (err) throw err;
    console.log("完成")
});


// let newJSON2 = echartsUtil.convert2Echarts(JSON.stringify(xszsJSON), "苏州市", 'json')
//
//
// console.log(newJSON2)
//
// // let txt2 = JSON.stringify(newJSON2)
//
// fs.writeFile("旧苏州市.json", newJSON2, function (err) {
//     if (err) throw err;
//     console.log("完成")
// });