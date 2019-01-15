const Mysql = require('../sqldb/index'); // 引入MySQL数据库
const SchoolInfo = Mysql.SchoolInfo;// 将Sequelize与表结构对应
var iconv = require('iconv-lite');
const xlsx = require('node-xlsx');

const fs = require("fs");
const filePath = 'D://文档//Tencent Files//424144965//FileRecv//2//'

let schoolInfoList = []

loadFolder(filePath)

function loadFolder(filePath) {
    fs.readdir(filePath, function (err, files) {
        files.forEach((item, index) => {
            // console.log({item})
            loadFile(item)
        })
        // obj[0].data = obj[0].data.push(headerArr)
    })
}

function loadFile(fileName) {
    let schoolInfoItem = {
        schoolid: fileName,
        jj: "",
        yz: "",
    }
    let yzStr = ""
    let yzUrl = filePath + fileName + '//园长.txt'
    let jjStr = ""
    let jjUrl = filePath + fileName + '//简介.txt'

    let exists1 = fs.existsSync(jjUrl)
    if (exists1) {
        let fileStr = fs.readFileSync(jjUrl, {encoding: 'binary'});
        let buf = new Buffer(fileStr, 'binary');

        let jjStr = iconv.decode(buf, 'GBK')
        schoolInfoItem.jj = jjStr.toString("utf-8");
    }
    let exists2 = fs.existsSync(yzUrl)
    if (exists2) {

        let fileStr = fs.readFileSync(yzUrl, {encoding:'binary'});
        let buf = new Buffer(fileStr, 'binary');
        yzStr = iconv.decode(buf, 'GBK');
        schoolInfoItem.yz = yzStr.toString("utf-8");
    }

    // console.log({schoolInfoItem})
    schoolInfoList.push([schoolInfoItem.schoolid,schoolInfoItem.yz,schoolInfoItem.jj])
    //
    // fs.exists(yzUrl,function(exists){
    //     if(exists){
    //         let fileStr = fs.readFileSync(yzUrl, {encoding:'binary'});
    //         let buf = new Buffer(fileStr, 'binary');
    //         yzStr = iconv.decode(buf, 'GBK');
    //         schoolInfoItem.yz = iconv.decode(buf, 'GBK');
    //         // console.log({yzStr})
    //     }
    //     if(!exists){
    //         // console.log("文件不存在")
    //     }
    // })


}


setTimeout(function () {

    console.log({schoolInfoList})
    var buffer = xlsx.build([
        {
            name:'sheet1',
            data:schoolInfoList
        }
    ]);

//将文件内容插入新的文件中
    fs.writeFileSync('test1.xlsx',buffer,{'flag':'w'});
    // SchoolInfo.bulkCreate(schoolInfoList).catch(function (err) {
    //     console.log("发生错误：" + err);
    // });
},2)

