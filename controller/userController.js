const userModel = require('../model/userModel.js'); // 引入user的表结构
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const serverConfig = require('../config/server')


class userController {


    /**
     * 登录
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async postUserAuth(ctx) {
        const data = ctx.request.body; // post过来的数据存在request.body里

        console.log("data", data)

        const userInfo = await
            userModel.findUserByName(data.username); // 数据库返回的数据

        if (!userInfo) {
            console.log("不存在啊啊啊啊啊啊")
            ctx.body = {
                success: false,
                retDsc: '用户不存在',
                ret: null
            };
            return
        }
        if (!bcrypt.compareSync(data.password, userInfo.password)) {
            ctx.body = {
                success: false,
                retDsc: '密码错误',
                ret: null
            };
            return
        }
        const userToken = {
            // iss: serverConfig.userToken.iss,
            name: userInfo.username,
            id: userInfo.id,
        };
        const secret = serverConfig.jwtSecret; // 指定密钥，这是之后用来判断token合法性的标志
        const token = jwt.sign(userToken, secret); // 签发token
        ctx.body = {
            success: true,
            retDsc: '登陆成功',
            bean: {
                token
            }
        }
    }


    /**
     * 获取用户列表
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async getUserList(ctx) {
        const user = await userModel.findUserList();
        if (user) {
            ctx.body = {
                success: true,
                retDsc: '查询成功',
                ret: user
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
    static async getUserInfo(ctx) {
        const id = ctx.params.id; // 获取url里传过来的参数里的id
        const user = await
            userModel.findUserById(id);
        if (user) {
            ctx.body = {
                success: true,
                retDsc: '查询成功',
                ret: user
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
    static async createUser(ctx) {
        const user = ctx.request.body
        if (user.password && user.username) {
            const existUser = await userModel.findUserByName(user.username)
            if (existUser) {
                ctx.body = {
                    code: -1,
                    message: '用户名已经存在'
                }
            } else {
                // 密码加密
                const salt = bcrypt.genSaltSync()
                const hash = bcrypt.hashSync(user.password, salt)
                user.password = hash
                await userModel.createUser(user)
                const newUser = await userModel.findUserByName(user.username)

                // 签发token
                const userToken = {
                    id: newUser.id,
                    name: newUser.username,
                    // exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60 //1 hours
                }
                const token = jwt.sign(userToken, serverConfig.jwtSecret, {expiresIn: '1h'})

                ctx.body = {
                    code: 1,
                    message: '创建成功',
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
    static async destroyUser(ctx) {
        const id = ctx.params.id; // 获取url里传过来的参数里的id
        const user = await userModel.destroyUser(id);
        if (user) {
            ctx.body = {
                success: true,
                retDsc: '删除成功',
                ret: user
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
    static async updateUser(ctx) {
        const id = ctx.params.id; // 获取url里传过来的参数里的id
        const user = ctx.request.body
        if (user.password && user.username) {
            const existUser = await userModel.findUserByName(user.username)
            if (existUser) {
                ctx.body = {
                    code: -1,
                    message: '用户名已经存在'
                }
            } else {
                // 密码加密
                const salt = bcrypt.genSaltSync()
                const hash = bcrypt.hashSync(user.password, salt)
                user.password = hash
                await userModel.updateUser(id, user)
                const newUser = await userModel.findUserByName(user.username)

                // 签发token
                const userToken = {
                    id: newUser.id,
                    name: newUser.username,
                    // exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60 //1 hours
                }
                const token = jwt.sign(userToken, serverConfig.jwtSecret, {expiresIn: '1h'})

                ctx.body = {
                    code: 1,
                    message: '更新成功',
                    ret: user,
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

module.exports = userController;
