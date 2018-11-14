const userModal = require('../model/userModel.js'); // 引入user的表结构

var userController = {
    getUserInfo:async function (ctx) {
        const id = ctx.params.id; // 获取url里传过来的参数里的id
        const user = await userModal.getUserById(id);
        if (user) {
            ctx.body = {
                success: true,
                retDsc: '查询成功',
                ret: user
            }
        } else {
            ctx.body = {
                success: false,
                retDsc: '用户不存在',
                ret: null
            };
        }
    }
}

module.exports = userController;
