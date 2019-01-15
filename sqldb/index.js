'use strict'
/** 数据库 **/
// 引入模块
const Sequelize = require('sequelize');
// 读取配置
const mysqlConfig = require('../config/mysql');
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
db.UserInfo = db.koa2.import('../schema/userInfo.js');
db.SchoolInfo = db.koa2.import('../schema/schoolInfo.js');
db.Folder = db.koa2.import('../schema/folder.js');
db.File = db.koa2.import('../schema/file.js');
db.PinYin = db.koa2.import('../schema/pinyin.js');
db.School = db.koa2.import('../schema/school.js');
db.Image = db.koa2.import('../schema/image.js');

//一对一
db.User.hasOne(db.UserInfo)
db.UserInfo.belongsTo(db.User)
db.User.hasMany(db.Folder)
db.Folder.hasMany(db.File)

module.exports = db;