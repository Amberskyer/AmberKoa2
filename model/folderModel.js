const Mysql = require('../sqldb/index'); // 引入MySQL数据库

const Folder = Mysql.Folder;// 将Sequelize与表结构对应

class folderModel {

    /**
     * 获取用户列表
     * @param user
     * @returns {Promise.<boolean>}
     */
    static async findFolderList(option, userId) {
        const parentId = option.parentId || 0
        const name = option.name || ''
        const page = option.page || 1
        const pageSize = option.pageSize || null
        return await Folder.findAndCountAll({
            where: {
                 parentId, userId
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
    static async findFolderById(id) {
        return await Folder.findOne({
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
    static async findFolderByName(name, parentId, userId) {
        return await Folder.findOne({
            where: {
                name, userId, parentId
            }
        })
    }

    /**
     * 创建用户
     * @param user
     * @returns {Promise.<boolean>}
     */
    static async createFolder(folder) {
        // let folder
        await Folder.create(folder)
        return true
    }

    /**
     * 删除用户
     * @param user
     * @returns {Promise.<boolean>}
     */
    static async destroyFolder(id, userId) {
        await Folder.destroy({
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
    static async updateFolder(id, folder,userId) {
        await Folder.update(folder, {
            where: {
                id,userId
            }
        })
        return true
    }
}

module.exports = folderModel;
