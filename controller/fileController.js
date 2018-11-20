const fileModel = require('../model/fileModel'); // 引入user的表结构
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const serverConfig = require('../config/server')


class fileController {


    /**
     * 获取用户列表
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async getFileList(ctx) {
        const option = ctx.request.query
        const list = await fileModel.findFileList(option, ctx.user.id);
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
    static async getFileInfo(ctx) {
        const option = ctx.request.query
        const id = ctx.params.id; // 获取url里传过来的参数里的id
        const info = await fileModel.findFileById(id);
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
    static async createFile(ctx) {
        const File = ctx.request.body
        if (data.foderId && data.name) {
            const File = await fileModel.findFileByName(File.name, File.foderId, ctx.user.id)
            if (existUser) {
                ctx.body = {
                    code: -1,
                    message: '文件夹已经存在'
                }
            } else {
                await fileModel.createFile(File)
                const newUser = await fileModel.findUserByName(File.name, File.foderId, ctx.user.id)
                ctx.body = {
                    code: 1,
                    message: '创建成功',
                    ret: newUser,
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
    static async destroyFile(ctx) {
        const id = ctx.params.id; // 获取url里传过来的参数里的id
        const File = await fileModel.destroyFile(id, ctx.user.id);
        if (File) {
            ctx.body = {
                success: true,
                retDsc: '删除成功',
                ret: File
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
    static async updateFile(ctx) {
        const id = ctx.params.id; // 获取url里传过来的参数里的id
        const File = ctx.request.body
        if (File.name && File.foderId) {
            const existUser = await fileModel.findFileByName(File.name, File.foderId, ctx.user.id)
            if (existUser) {
                ctx.body = {
                    code: -1,
                    message: '该文件夹已存在'
                }
            } else {
                await fileModel.updateFile(id, user)
                const newFile = await fileModel.findUserByName(File.name, File.foderId, ctx.user.id)

                ctx.body = {
                    code: 1,
                    message: '更新成功',
                    ret: newFile,
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

module.exports = fileController;
