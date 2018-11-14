const Mysql = require('../sqldb/index'); // 引入MySQL数据库

const User = Mysql.User;// 将Sequelize与表结构对应

var userModel = {
    getUserById: async function (id) {
        return await User.findOne({
            where: {
                id
            }
        })
    },
    getUserByName: async function (username) {
        return await User.findOne({
            where: {
                username
            }
        })
    }
}

module.exports = userModel;
