const Mysql = require('../sqldb/index'); // 引入MySQL数据库

const User = Mysql.User;// 将Sequelize与表结构对应

class userModel {
    static async getUserById(id) {
        return await User.findOne({
            where: {
                id
            }
        })
    }

    static async getUserByName(username) {
        return await User.findOne({
            where: {
                username
            }
        })
    }
}

module.exports = userModel;
