let userController = require('../controller/userController')
const KoaRouter = require('koa-router');

const router = new KoaRouter();


router.get('/user/:id', userController.getUserInfo);

// const userModal = '../model/userModel.js'; // 引入user的表结构
// const Mysql = require('../sqldb/index') ; // 引入MySQL数据库
// const User = Mysql.User;// 将Sequelize与表结构对应
// router.get('/user/:id', async function (ctx) {
//     const id = ctx.params.id; // 获取url里传过来的参数里的id
//     console.log(id)
//
//     let  user =await User.findOne({
//         where: {
//             id
//         }
//     })
//     if (user) {
//         ctx.body = {
//             success: true,
//             retDsc: '查询成功',
//             ret: user
//         }
//     } else {
//         ctx.body = {
//             success: false,
//             retDsc: '用户不存在',
//             ret: null
//         };
//     }
// });
// router.post('/user', userController.postUserAuth);

module.exports = router;
