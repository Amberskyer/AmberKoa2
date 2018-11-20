const folderModel = require('../model/folderModel'); // 引入user的表结构
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const serverConfig = require('../config/server')


class folderController {


    /**
     * 获取用户列表
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async getFolderList(ctx) {
        const option = ctx.request.query
        const list = await folderModel.findFolderList(option, ctx.user.id);
        if (list) {
            ctx.body = {
                success: true,
                retDsc: '查询成功',
                ret: list
            }
        } else {
            ctx.body = {
                success: false,
                retDsc: '查询失败',
                ret: null
            };
        }
    }

    /**
     * 获取用户信息
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async getFolderInfo(ctx) {
        const option = ctx.request.query
        const id = ctx.params.id; // 获取url里传过来的参数里的id
        const info = await folderModel.findFolderById(id);
        if (info) {
            ctx.body = {
                success: true,
                retDsc: '查询成功',
                ret: info
            }
        } else {
            ctx.body = {
                success: false,
                retDsc: '查询失败',
                ret: null
            };
        }
    }

    /**
     * 创建用户
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async createFolder(ctx) {
        const folder = ctx.request.body
        if (data.parentId && data.name) {
            const folder = await folderModel.findFolderByName(folder.name,folder.parentId, ctx.user.id)
            if (existUser) {
                ctx.body = {
                    code: -1,
                    message: '文件夹已经存在'
                }
            } else {
                await folderModel.createFolder(folder)
                const newUser = await folderModel.findUserByName(folder.name,folder.parentId, ctx.user.id)
                ctx.body = {
                    code: 1,
                    message: '创建成功',
                    ret:newUser,
                    bean: {
                        token
                    }
                }


            }
        } else {
            ctx.body = {
                code: -1,
                message: '参数错误'
            }
        }
    }

    /**
     * 删除用户
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async destroyFolder(ctx) {
        const id = ctx.params.id; // 获取url里传过来的参数里的id
        const folder = await folderModel.destroyFolder(id, ctx.user.id);
        if (folder) {
            ctx.body = {
                success: true,
                retDsc: '删除成功',
                ret: folder
            }
        } else {
            ctx.body = {
                success: false,
                retDsc: '删除失败',
                ret: null
            };
        }
    }

    /**
     * 更新用户
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async updateFolder(ctx) {
        const id = ctx.params.id; // 获取url里传过来的参数里的id
        const folder = ctx.request.body
        if (folder.name && folder.parentId) {
            const existUser = await folderModel.findFolderByName(folder.name,folder.parentId,ctx.user.id)
            if (existUser) {
                ctx.body = {
                    code: -1,
                    message: '该文件夹已存在'
                }
            } else {
                await folderModel.updateFolder(id, user)
                const newFolder = await folderModel.findUserByName(folder.name,folder.parentId,ctx.user.id)

                ctx.body = {
                    code: 1,
                    message: '更新成功',
                    ret: newFolder,
                    bean: {
                        token
                    }
                }

            }
        } else {
            ctx.body = {
                code: -1,
                message: '参数错误'
            }
        }
    }
}

module.exports = folderController;
