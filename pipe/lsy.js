var fs = require('fs');
var request = require("request");
function loadSome() {

    let bigUrl = "http://some18.com/data/";
    for (let i = 0; i < 774; i++) {
        let urlName = "0_"+i+".jpg"
        let imgName ="0_"+ i+".png"
        var writeStream = fs.createWriteStream('./some18/'+imgName);
        var readStream = request(bigUrl + urlName)
        readStream.pipe(writeStream);
        readStream.on('end', function() {
            console.log('文件下载成功');
        });
        readStream.on('error', function() {
            console.log("错误信息:" + err)
        })
        writeStream.on("finish", function() {
            console.log("文件写入成功");
            writeStream.end();
        });

    }
}
// loadXxxmario()
function loadXxxmario() {

    let bigUrl = "http://xxxmario.com/th_rand/";
    for (let i = 0; i < 774; i++) {
        let urlName = i+".jpg"
        let imgName =i+".png"
        var writeStream = fs.createWriteStream('./xxxmario/'+imgName);
        var readStream = request(bigUrl + urlName)
        readStream.pipe(writeStream);
        readStream.on('end', function() {
            console.log('文件下载成功');
        });
        readStream.on('error', function() {
            console.log("错误信息:" + err)
        })
        writeStream.on("finish", function() {
            console.log("文件写入成功");
            writeStream.end();
        });

    }
}
// loadXxxkiwi()
function loadXxxkiwi() {

    let bigUrl = "http://xxxkiwi.site/th_uploaded/";
    for (let i = 0; i < 774; i++) {
        let urlName = i+".jpg"
        let imgName =i+".png"
        var writeStream = fs.createWriteStream('./xxxkiwi/'+imgName);
        var readStream = request(bigUrl + urlName)
        readStream.pipe(writeStream);
        readStream.on('end', function() {
            console.log('文件下载成功');
        });
        readStream.on('error', function() {
            console.log("错误信息:" + err)
        })
        writeStream.on("finish", function() {
            console.log("文件写入成功");
            writeStream.end();
        });

    }
}
// loadTeenshotgirls()
function loadTeenshotgirls() {

    let bigUrl = "http://teenshotgirls.xyz/th/";
    for (let i = 0; i < 100; i++) {
        let urlName = i+".jpg"
        let imgName =i+".png"
        var writeStream = fs.createWriteStream('./teenshotgirls/'+imgName);
        var readStream = request(bigUrl + urlName)
        readStream.pipe(writeStream);
        readStream.on('end', function() {
            console.log('文件下载成功');
        });
        readStream.on('error', function(err) {
            console.log("错误信息:" + err)
        })
        writeStream.on("finish", function() {
            console.log("文件写入成功");
            writeStream.end();
        });

    }
}

xxxfanta()
function xxxfanta() {

    let bigUrl = "http://xxxfanta.site/th_uploaded/";
    for (let i = 0; i < 100; i++) {
        let urlName = i+".jpg"
        let imgName =i+".png"
        var writeStream = fs.createWriteStream('./xxxfanta/'+imgName);
        var readStream = request(bigUrl + urlName)
        readStream.pipe(writeStream);
        readStream.on('end', function() {
            console.log('文件下载成功');
        });
        readStream.on('error', function(err) {
            console.log("错误信息:" + err)
        })
        writeStream.on("finish", function() {
            console.log("文件写入成功");
            writeStream.end();
        });

    }
}

// loadNudfam()

function loadNudfam() {

    let bigUrl = "http://uploads.4imghost.com/content/36/";
    for (let i = 0; i < 774; i++) {
        let urlName = i+".jpg"
        let imgName =i+".png"
        var writeStream = fs.createWriteStream('./nudfam/36/'+imgName);
        var readStream = request(bigUrl + urlName)
        readStream.pipe(writeStream);
        readStream.on('end', function() {
            console.log('文件下载成功');
        });
        readStream.on('error', function() {
            console.log("错误信息:" + err)
        })
        writeStream.on("finish", function() {
            console.log("文件写入成功");
            writeStream.end();
        });

    }
}