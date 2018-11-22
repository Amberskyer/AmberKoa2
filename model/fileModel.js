const Mysql = require('../sqldb/index'); // 引入MySQL数据库

const File = Mysql.File;// 将Sequelize与表结构对应

class fileModel {

    /**
     * 获取用户列表
     * @param user
     * @returns {Promise.<boolean>}
     */
    static async findFileList(option, userId) {
        const folderId = option.folderId || 2
        const name = option.name || ''
        const page = option.page || 1
        const pageSize = option.pageSize || null
        return await File.findAndCountAll({
            where: {
                folderId, userId
            },
            offset: (page - 1) * pageSize,
            limit: pageSize
        })
    }

    /**
     * 根据ID获取用户
     * @param user
     * @returns {Promise.<boolean>}
     */
    static async findFileById(id) {
        return await File.findOne({
            where: {
                id,
            }
        })
    }


    /**
     * 根据名称获取用户
     * @param user
     * @returns {Promise.<boolean>}
     */
    static async findFileByName(name, folderId, userId) {
        return await File.findOne({
            where: {
                name, userId, folderId
            }
        })
    }

    /**
     * 创建用户
     * @param user
     * @returns {Promise.<boolean>}
     */
    static async createFile(file) {
        // let File
        await File.create(file)
        return true
    }

    /**
     * 删除用户
     * @param user
     * @returns {Promise.<boolean>}
     */
    static async destroyFile(id, userId) {
        await File.destroy({
            where: {
                id, userId
            }
        })
        return true
    }

    /**
     * 创建用户
     * @param user
     * @returns {Promise.<boolean>}
     */
    static async updateFile(id, file, userId) {
        await File.update(file, {
            where: {
                id, userId
            }
        })
        return true
    }
}

module.exports = fileModel;
