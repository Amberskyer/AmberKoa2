const Mysql = require('../sqldb/index'); // 引入MySQL数据库

const User = Mysql.User;// 将Sequelize与表结构对应

class userModel {

    /**
     * 获取用户列表
     * @param user
     * @returns {Promise.<boolean>}
     */
    static async findUserList() {
        return await User.findAll({
            where: {
                // id
            },
            limit:3
        })
    }

    /**
     * 根据ID获取用户
     * @param user
     * @returns {Promise.<boolean>}
     */
    static async findUserById(id) {
        return await User.findOne({
            where: {
                id
            }
        })
    }


    /**
     * 根据名称获取用户
     * @param user
     * @returns {Promise.<boolean>}
     */
    static async findUserByName(username) {
        return await User.findOne({
            where: {
                username
            }
        })
    }

    /**
     * 创建用户
     * @param user
     * @returns {Promise.<boolean>}
     */
    static async createUser(user) {
        await User.create(user)
        return true
    }

    /**
     * 删除用户
     * @param user
     * @returns {Promise.<boolean>}
     */
    static async destroyUser(id) {
        await User.destroy({
            where: {
                id
            }
        })
        return true
    }

    /**
     * 创建用户
     * @param user
     * @returns {Promise.<boolean>}
     */
    static async updateUser(id, user) {
        await User.update(user, {
            where: {id}
        })
        return true
    }
}

module.exports = userModel;
