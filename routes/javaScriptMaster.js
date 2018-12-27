const router = require('koa-router')();


router.prefix('/javascript/demo')

router.get('/', async (ctx, next) => {
    // 获取session
    await ctx.render('./JavaScriptMaster/index', {
        title: 'Hello Koa 2!',
    })
})

module.exports = router;