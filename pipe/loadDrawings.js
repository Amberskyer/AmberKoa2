const fs = require("fs");
const path = require("path");
let request = require("request");

const Mysql = require('../sqldb/index'); // 引入MySQL数据库
const DrawingsDB = Mysql.Drawings;// 将Sequelize与表结构对应

const basePath = 'D://图片//raw_data'


// loadFolder(basePath)

function loadFolder(basePath) {
    fs.readdir(basePath, function (err, files) {
        files.forEach((item, index) => {
            // console.log({item})
            if (item == "drawings") {
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
        let num = 20000
        if (index > num && index <= (10000 + num)) {
            imageList.push(imageItem)
        }
    })


    DrawingsDB.bulkCreate(imageList).catch(function (err) {
        console.log("发生错误：" + err);
    });


}

let loadObj = {
    name: "Jhon",
    num: 0
}

let loadHandler = {
    set: function (target, key, value, receiver) {
        console.log({value})
        if (value >= 10) {
            value = 0
            loadImg()
        }
        return Reflect.set(target, key, value, receiver);
    },
    get: function (target, key, receiver) {
        return Reflect.get(target, key, receiver);
    }
}
let loadEvent = new Proxy(loadObj, loadHandler);

loadImg()

async function loadImg() {


    const dirPath = 'D://图片//raw_data/drawings/IMAGES/'

    let imageList = await DrawingsDB.findAndCount({
        where: {
            isdown: {
                $notLike:1
            }
        },
        limit: 10
    })


    imageList.rows.forEach(item => {
        let stream = fs.createWriteStream(path.join(dirPath, item.name.split('?')[0]));
        request(item.url, {proxy: 'http://127.0.0.1:1080', timeout: 5000}, function (err) {
            if(err){

                console.log("错误",err.code)
            }

            if(err && err.code == 'ESOCKETTIMEDOUT'){
                console.log("超时",item.name)
                loadEvent.num = loadEvent.num + 1
            }
            // loadEvent.num = loadEvent.num + 1
            // process.exit(0);
        }).pipe(stream).on("close", async function (err) {
            console.log("下载",item.name)
            if (err) {
            } else {
                let res = await  DrawingsDB.update({
                    isdown: 1
                }, {
                    where: {
                        id: item.id
                    }
                })
            }
            loadEvent.num = loadEvent.num + 1
        });
    })

}

