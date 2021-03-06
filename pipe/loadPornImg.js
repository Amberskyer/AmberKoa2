const fs = require("fs");
const path = require("path");
let request = require("request");

const Mysql = require('../sqldb/index'); // 引入MySQL数据库
const ImageDB = Mysql.Image;// 将Sequelize与表结构对应

const basePath = './raw_data/'


// loadFolder(basePath)

function loadFolder(basePath) {
    fs.readdir(basePath, function (err, files) {
        files.forEach((item, index) => {
            // console.log({item})
            if (item == "porn") {
                initile(item)
            }
        })
    })
}

function initile(fileName) {

    const urlTextName = "urls_" + fileName + ".txt"
    const urlTextPath = basePath + fileName + "/" + urlTextName
    let urlTextStr = fs.readFileSync(urlTextPath, {encoding: 'binary'});
    const urlArr = urlTextStr.split('\n')

    const imageFolderPath = basePath + fileName + "/IMAGES/"

    let imageList = []
    console.log(urlArr.length)

    urlArr.forEach((item, index) => {

        const imgName = item.split('/').pop()
        let imageItem = {
            name: imgName,
            url: item
        }
        let num = 110000
        if (index > num && index <= (10000 + num)) {
            imageList.push(imageItem)
        }
    })


    ImageDB.bulkCreate(imageList).catch(function (err) {
        console.log("发生错误：" + err);
    });


}

let loadObj = {
    name: "Jhon",
    num: 0
}

let loadHandler = {
    set: function (target, key,  value, receiver) {
        console.log('set', {target})
        console.log('set', {value})
        if(value >= 10){
            loadImg()
        }
        return Reflect.set(target, key, value, receiver);
    },
    get: function (target, key, receiver) {
        console.log('get', {target})
        return Reflect.get(target, key, receiver);
    }
}
let loadEvent = new Proxy(loadObj, loadHandler);

loadImg()

async function loadImg() {

    loadEvent.num = 0

    const dirPath = './raw_data/porn/IMAGES/'

    let imageList = await ImageDB.findAndCount({
        where: {
            isdown: 0
        },
        limit: 10
    })


    imageList.rows.forEach(item => {
        let stream = fs.createWriteStream(path.join(dirPath, item.name));
        request(item.url, {proxy: 'http://127.0.0.1:1080'}).pipe(stream).on("close", async function (err) {
            console.log("文件[" + item.name + "]下载完毕");
            let res = await  ImageDB.update({
                isdown: 1
            }, {
                where: {
                    id: item.id
                }
            })
            if (res) {
                loadEvent.num = loadEvent.num + 1
            }
        });
    })

}

