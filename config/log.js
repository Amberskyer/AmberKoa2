const errorPath = '../logs'
const responsePath = '../logs'
const errorLogPath = '../logs/error'
const responseLogPath = '../logs/response'
const config = {
    "appenders":{
        error: {
            "category":"errorLogger",             //logger名称
            "type": "dateFile",                   //日志类型
            "filename": errorLogPath,             //日志输出位置
            "alwaysIncludePattern":true,          //是否总是有后缀名
            "pattern": "-yyyy-MM-dd-hh.log",      //后缀，每小时创建一个新的日志文件
            "path": errorPath
        },
        response: {
            "category":"resLogger",
            "type": "dateFile",
            "filename": responseLogPath,
            "alwaysIncludePattern":true,
            "pattern": "-yyyy-MM-dd-hh.log",
            "path": responsePath,
        }
    },
    "categories" : {
        error: { appenders: ['error'], level: 'error' },
        response: { appenders: ['response'], level: 'info' },
        default: { appenders: ['response'], level: 'info' },
    }
}


module.exports = config;