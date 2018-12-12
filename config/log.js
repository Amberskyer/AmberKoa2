const path = require('path');

//日志根目录
const baseLogPath = path.resolve(__dirname, '../logs')

//错误日志目录
const errorPath = "/error";
//错误日志文件名
const errorFileName = "error";
//错误日志输出完整路径
const errorLogPath = baseLogPath + errorPath + "/" + errorFileName;
// var errorLogPath = path.resolve(__dirname, "../logs/error/error");


//响应日志目录
const responsePath = "/response";
//响应日志文件名
const responseFileName = "response";
//响应日志输出完整路径
const responseLogPath = baseLogPath + responsePath + "/" + responseFileName;
// var responseLogPath = path.resolve(__dirname, "../logs/response/response");


const config = {
    "appenders": {
        error: {
            "category": "errorLogger",             //logger名称
            "type": "dateFile",                   //日志类型
            "filename": errorLogPath,             //日志输出位置
            "alwaysIncludePattern": true,          //是否总是有后缀名
            "pattern": "-yyyy-MM-dd-hh.log",      //后缀，每小时创建一个新的日志文件
            "path": errorPath
        },
        response: {
            "category": "resLogger",
            "type": "dateFile",
            "filename": responseLogPath,
            "alwaysIncludePattern": true,
            "pattern": "-yyyy-MM-dd-hh.log",
            "path": responsePath,
        }
    },
    "categories": {
        errorLogger: {appenders: ['error'], level: 'error'},
        resLogger: {appenders: ['response'], level: 'info'},
        default: {appenders: ['error'], level: 'info'},
    }
}


module.exports = config;