const fs = require("fs");
const AdmZip = require('adm-zip'); //引入查看zip文件的包
const filePath = '../public/docs/校长问卷/'
const xlsx = require('node-xlsx');
const util = require('util')


loadFolder(filePath)

let cellArr = []
let headerArr = ["学校名称","校长姓名","教师人数","男教师","女教师","小学部专任教师","小学部1内新教师","小学部1内新教师比例","小学部3年内新教师","小学部3年内新教师比例","小学部教师平均年龄","小学部35周岁以下","小学部35周岁以下比例","小学部36-45周岁","小学部36-45周岁比例","小学部46周岁以上","小学部46周岁以上比例","中学部专任教师","中学部1内新教师","中学部1内新教师比例","中学部3年内新教师","中学部3年内新教师比例","中学部教师平均年龄","中学部35周岁以下","中学部35周岁以下比例","中学部36-45周岁","中学部36-45周岁比例","中学部46周岁以上","中学部46周岁以上比例","合计专任教师","合计1内新教师","合计1内新教师比例","合计3年内新教师","合计3年内新教师比例","合计教师平均年龄","合计35周岁以下","合计35周岁以下比例","合计36-45周岁","合计36-45周岁比例","合计46周岁以上","合计46周岁以上比例","小学部专任教师","小学部研究生","小学部研究生比例","小学部本科","小学部本科比例","中学部专任教师","中学部研究生","中学部研究生比例","中学部本科","中学部本科比例","合计专任教师","合计研究生","合计研究生比例","合计本科","合计本科比例","小学部专任教师","小学部正高","小学部正高比例","小学部高级","小学部高级比例","小学部中级","小学部中级比例","小学部初级","小学部初级比例","小学部未定级","小学部未定级比例","中学部专任教师","中学部正高","中学部正高比例","中学部高级","中学部高级比例","中学部中级","中学部中级比例","中学部初级","中学部初级比例","中学部未定级","中学部未定级比例","合计专任教师","合计正高","合计正高比例","合计高级","合计高级比例","合计中级","合计中级比例","合计初级","合计初级比例","合计未定级","合计未定级比例","国家万人计划教学名师","省人民教育教育家工程培养对象","省名教师名校长","正高级教师（引进）","正高级教师（自培）","特级教师（引进）","特级教师（自培）","全国模范教师（引进）","全国模范教师（自培）","全国优秀教师（引进）","全国优秀教师（自培）","姑苏教育人才教育名家（引进）","姑苏教育人才教育名家（自培）","姑苏教育人才教育紧缺（引进）","姑苏教育人才教育紧缺（自培）","姑苏教育人才教育领军（引进）","姑苏教育人才教育领军（自培）","姑苏教育人才教育特聘（引进）","姑苏教育人才教育特聘（自培）","姑苏教育人才青年拔尖（引进）","姑苏教育人才青年拔尖（自培）","苏州市名教师名校长（引进）","苏州市名教师名校长（自培）","国家万人计划教学名师（40周岁以下）","省人民教育教育家工程培养对象（40周岁以下）","省名教师名校长（40周岁以下）","正高级教师引进（40周岁以下）","正高级教师自培（40周岁以下）","特级教师引进（40周岁以下）","特级教师自培（40周岁以下）","全国模范教师引进（40周岁以下）","全国模范教师自培（40周岁以下）","全国优秀教师引进（40周岁以下）","全国优秀教师自培（40周岁以下）","姑苏教育人才教育名家引进（40周岁以下）","姑苏教育人才教育名家自培（40周岁以下）","姑苏教育人才教育紧缺引进（40周岁以下）","姑苏教育人才教育紧缺自培（40周岁以下）","姑苏教育人才教育领军引进（40周岁以下）","姑苏教育人才教育领军自培（40周岁以下）","姑苏教育人才教育特聘引进（40周岁以下）","姑苏教育人才教育特聘自培（40周岁以下）","姑苏教育人才青年拔尖引进（40周岁以下）","姑苏教育人才青年拔尖自培（40周岁以下）","苏州市名教师名校长引进（40周岁以下）","苏州市名教师名校长自培（40周岁以下）","省学科带头人","市学科带头人","区学科大头人","省教学能手","市教学能手","区教学能手","市教坛新秀","区教坛新秀","省学科带头人（40岁以下）","市学科带头人（40岁以下）","区学科大头人（40岁以下）","省教学能手（40岁以下）","市教学能手（40岁以下）","区教学能手（40岁以下）","市教坛新秀（40岁以下）","区教坛新秀（40岁以下）","区教坛新秀及以上骨干教师","市级及以上骨干教师","省级以上骨干教师","参加两周以上境外专业进修人次","担任两个月以上海外进修带队教师","中层以上干部","35周岁以下中层以上干部","三年内参加全区教师交流","一年内参加全区教师交流","在校生","三年内流出教师","三年内流出骨干教师获名师"]
let obj = [{
    name: 'Sheet',
    data: []
}]

function loadFolder(filePath) {
    fs.readdir(filePath, function (err, files) {
        files.forEach((item, index) => {
            initFile(filePath, item)
            if (index == files.length - 1) {

                obj[0].data = [headerArr].concat(cellArr)
                const newFile = xlsx.build(obj);
                fs.writeFileSync("../public/docs/" + '汇总.xlsx', newFile, 'binary');
            }
        })
        // obj[0].data = obj[0].data.push(headerArr)
    })
}

function initFile(filePath, file) {

    if (file.indexOf("docx") != -1) {

        const zip = new AdmZip(filePath + file); //filePath为文件路径
        const contentXml = zip.readAsText("word/document.xml");//将document.xml读取为text内容；
        let tableListArr = [];
        let countListArr = Array.from({length: (8)}, () => "")

        let XmlList1 = contentXml.match(/<w:p>[\s\S]*?<\/w:p>/ig)

        if (XmlList1) {
            XmlList1.forEach((item, index) => {
                let item2List = item.match(/<w:r>[\s\S]*?<\/w:r>/ig)
                if (item2List) {
                    item2List.forEach((item2, index2) => {
                        // console.log(item2)
                        let item3List = item2.match(/<w:t[\s\S]*?<\/w:t>/ig)
                        if (item3List) {
                            item3List.forEach((item3) => {
                                for (let i = 5; i < 12; i++) {

                                    if (item3.indexOf(i + ". ") != -1) {

                                        let wrList = item2List
                                        let str = ''
                                        wrList.forEach((item4) => {
                                            let singleList = item4.match(/<w:u w:val="single"/ig)
                                            if (singleList) {
                                                let numList = item4.match(/<w:t[\s\S]*?<\/w:t>/ig)
                                                numList.forEach((item5) => {
                                                    if (item5.indexOf("preserve") != -1) {
                                                        str += item5.slice(26, item5.length - 6)
                                                    } else {
                                                        str += item5.slice(5, item5.length - 6)
                                                    }
                                                })
                                            }
                                        })
                                        countListArr[i - 5] = str
                                        // console.log(file ,"第" + i + "个", str)
                                        if (file == "4. 校长问卷（唯亭学校）.docx") {
                                            console.log(file, "第" + i + "个", str)
                                        }
                                    }
                                }
                            })
                        }
                    })
                }
            });
        }
        let XmlList2 = contentXml.match(/<w:tbl>[\s\S]*?<\/w:tbl>/ig)
        if (XmlList2) {
            XmlList2.forEach((item, index) => {
                let tableArr = []
                let item2List = item.match(/<w:tr[\s\S]*?<\/w:tr>/ig)
                if (item2List) {
                    item2List.forEach((item2) => {
                        let item3List = item2.match(/<w:tc>[\s\S]*?<\/w:tc>/ig)
                        let tableCellArr = []
                        item3List.forEach((item3) => {
                            let str = "--";
                            let item4List = item3.match(/<w:t>[\s\S]*?<\/w:t>/ig)

                            if (item4List) {
                                item4List.forEach((item4) => {
                                    if (str == "--") {
                                        str = ''
                                    }
                                    str += item4.slice(5, item4.length - 6)

                                })
                            }

                            tableCellArr.push(str)
                        })
                        tableArr.push(tableCellArr)
                    });
                }

                tableListArr.push(tableArr)
            });
        }

        let cellItem = Array.from({length: (headerArr.length + 1)}, () => "")
        // console.log(file,tableListArr.length)
        tableListArr.forEach((item, index) => {
            if (index == 0) {
                item.forEach((item2, index2) => {
                    if (item2[0] == "小学部") {
                        item2.forEach((item3, index3) => {
                            if (index3 != 0) {
                                cellItem[5 + index3 - 1] = item3
                            }
                        })
                    } else if (item2[0] == "中学部") {
                        item2.forEach((item3, index3) => {
                            if (index3 != 0) {
                                cellItem[17 + index3 - 1] = item3
                            }
                        })
                    } else if (item2[0] == "合计"||item2[0] == "高中") {
                        item2.forEach((item3, index3) => {
                            if (index3 != 0) {
                                cellItem[29 + index3 - 1] = item3
                            }
                        })
                    }
                })
            }
            else if (index == 1) {
                item.forEach((item2, index2) => {
                    if (item2[0] == "小学部") {
                        item2.forEach((item3, index3) => {
                            if (index3 != 0) {
                                cellItem[41 + index3 - 1] = item3
                            }
                        })
                    } else if (item2[0] == "中学部") {
                        item2.forEach((item3, index3) => {
                            if (index3 != 0) {
                                cellItem[46 + index3 - 1] = item3
                            }
                        })
                    } else if (item2[0] == "合计"||item2[0] == "高中") {
                        item2.forEach((item3, index3) => {
                            if (index3 != 0) {
                                cellItem[51 + index3 - 1] = item3
                            }
                        })
                    }
                })
            }
            else if (index == 2) {
                item.forEach((item2, index2) => {
                    if (item2[0] == "小学部") {
                        item2.forEach((item3, index3) => {
                            if (index3 != 0) {
                                cellItem[56 + index3 - 1] = item3
                            }
                        })
                    } else if (item2[0] == "初中部") {
                        item2.forEach((item3, index3) => {
                            if (index3 != 0) {
                                cellItem[67 + index3 - 1] = item3
                            }
                        })
                    } else if (item2[0] == "合计"||item2[0] == "高中") {
                        item2.forEach((item3, index3) => {
                            if (index3 != 0) {
                                cellItem[78 + index3 - 1] = item3
                            }
                        })
                    }
                })
            }
            else if (index == 3) {
                item.forEach((item2, index2) => {
                    if (item2[0] == "人数") {
                        item2.forEach((item3, index3) => {
                            if (index3 != 0) {
                                cellItem[89 + index3 - 1] = item3
                            }
                        })
                    } else if (item2[0].indexOf("周岁") != -1) {
                        item2.forEach((item3, index3) => {
                            if (index3 != 0) {
                                cellItem[112 + index3 - 1] = item3
                            }
                        })
                    }
                })
            }
            else if (index == 4) {
                item.forEach((item2, index2) => {
                    if (item2[0] == "人数") {
                        item2.forEach((item3, index3) => {
                            if (index3 != 0) {
                                cellItem[135 + index3 - 1] = item3
                            }
                        })
                    } else if (item2[0].indexOf("周岁") != -1) {
                        item2.forEach((item3, index3) => {
                            if (index3 != 0) {
                                cellItem[143 + index3 - 1] = item3
                            }
                        })
                    }
                })
            }
        })
        // if(file == "4. 校长问卷 (10).docx"){
        //     console.log(file,tableListArr)
        // }
        cellItem[0] = file
        //.5的
        let count5Arr = countListArr[0].split(" ")
        cellItem[151] = count5Arr[0] || ''
        cellItem[152] = count5Arr[1] || ''
        cellItem[153] = count5Arr[2] || ''
        //.6的
        let count6Arr = countListArr[1].split(" ")
        cellItem[154] = count6Arr[0] || ''
        //.7的
        let count7Arr = countListArr[2].split(" ")
        cellItem[155] = count7Arr[0] || ''
        //.8的
        let count8Arr = countListArr[3].split(" ")
        cellItem[156] = count8Arr[0] || ''
        cellItem[157] = count8Arr[1] || ''
        //.9的
        let count9Arr = countListArr[4].split(" ")
        cellItem[158] = count9Arr[0] || ''
        cellItem[159] = count9Arr[1] || ''
        //.10的
        let count10Arr = countListArr[5].split(" ")
        cellItem[160] = count10Arr[0] || ''
        //.11
        let count11Arr = countListArr[6].split(" ")
        cellItem[161] = count11Arr[0] || ''
        cellItem[162] = count11Arr[0] || ''
        cellArr.push(cellItem)
    }

}


initHeader()

function initHeader() {
    const headerObj = xlsx.parse("../public/docs/" + "表头.xlsx")[0].data
    console.log(headerObj)
    let headerStr = "["
    headerObj.forEach(item => {
        headerStr += '"' + item[0] + '",'
    })
    headerStr += "]"
    console.log(headerStr)
    fs.writeFileSync("../public/docs/" + "表头" + '.txt', headerStr);
}

