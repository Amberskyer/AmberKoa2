let log4js = require('log4js');

let logConfig = require('../config/log');

//加载配置文件
log4js.configure(logConfig);

let logUtil = {};

let errorLogger = log4js.getLogger('error'); //categories的元素
let resLogger = log4js.getLogger('response');

//封装错误日志
logUtil.logError = function (ctx, error, resTime) {
    if (ctx && error) {
        errorLogger.error(formatError(ctx, error, resTime));
    }
};

//封装响应日志
logUtil.logResponse = function (ctx, resTime) {
    if (ctx) {
        resLogger.info(formatRes(ctx, resTime));
    }
};
