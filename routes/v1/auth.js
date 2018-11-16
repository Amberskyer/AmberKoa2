const userController = require('../../controller/userController')
const router = require('koa-router')();
const tf = require('@tensorflow/tfjs')


router.prefix('/user')


router.get('/:id', userController.getUserInfo);
router.post('/', userController.postUserAuth);

//
// router.get('/string', async (ctx, next) => {
//     // 定义模型：线性回归模型
//     const model = tf.sequential();
//     model.add(tf.layers.dense({units: 1, inputShape: [1]}));
//
//     // 定义模型损失函数和梯度下降算法
//     model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
//
//     // 准备学习数据
//     const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
//     const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);
//
//     //模型学习
//     model.fit(xs, ys)
//
//     let tenStr = await model.predict(tf.tensor2d([5], [1, 1]))
//
//     ctx.body = tenStr
//
// })


module.exports = router;
