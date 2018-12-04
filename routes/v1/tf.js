const router = require('koa-router')();
const tf = require('@tensorflow/tfjs')

router.prefix('/tf')

router.get('/test', async (ctx, next) => {
    // 定义模型：线性回归模型
    const model = tf.sequential();
    model.add(tf.layers.dense({units: 1, inputShape: [1]}));

    // 定义模型损失函数和梯度下降算法
    model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

    // 准备学习数据
    const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
    const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

    //模型学习
    await model.fit(xs, ys, {epochs: 500});

    let tenStr = await model.predict(tf.tensor2d([5], [1, 1]))

    ctx.body = tenStr

})

router.get('/test2', async (ctx, next) => {
    const model = tf.sequential();
    model.add(tf.layers.dense({
        units: 1,
        inputShape: [1]
    }));

    model.compile({
        loss: 'meanSquaredError',
        optimizer: 'sgd'
    });

    const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
    const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

    await model.fit(xs, ys, {epochs: 500});


    let tenStr = model.predict( tf.tensor2d([10], [1, 1]) )

    ctx.body = tenStr

})


module.exports = router;
