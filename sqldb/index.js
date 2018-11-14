'use strict'
/** 数据库 **/
// 引入模块
const Sequelize = require('sequelize');
// 读取配置
const mysqlConfig = require('../config/mysql-config');
const koa2Config = mysqlConfig.koa2
// 根据配置实例化seq
var db = {
    koa2: new Sequelize(koa2Config.dbname, koa2Config.uname, koa2Config.upwd, {
        host: koa2Config.host,
        port: koa2Config.port,
        dialect: koa2Config.dialect,
        pool: koa2Config.pool,
    }),
};
//用户数据库
db.User = db.koa2.import('../schema/user.js');

module.exports = db;