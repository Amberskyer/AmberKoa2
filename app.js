const Koa = require('koa')
const app = new Koa()
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')


// error handler
onerror(app)

// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(require('koa-static')(__dirname + '/public'))

/**
 * 设置模板语言
 */
const views = require('koa-views')
app.use(views(__dirname + '/views', {
    extension: 'swig'
}))


/**
 * 用来专门处理权限相关的路由
 */
const KoaRouter = require('koa-router');
const router = new KoaRouter();
// const auth = require('./routes/auth');
//
// const authRouter = auth.router;
// // 挂载auth子路由
// router.use('/auth', authRouter.routes());
// // 挂载所有路由
// app.use(router.routes());


/**
 * 挂载路由
 */
// const index = require('./routes/index')
// const users = require('./routes/users')
const auth = require('./routes/auth')
// routes
// app.use(index.routes(), index.allowedMethods())
// app.use(users.routes(), users.allowedMethods())
app.use(auth.routes(), auth.allowedMethods())


/**
 * koa-logger是koa的日志模块，在安装、挂载之后
 */
const logger = require('koa-logger')
app.use(logger())

/**
 * 一种是总是返回美化了的json数据，本文就采用的这种
 */
const json = require('koa-json')
app.use(json())

/**
 * 用来处理跨域的中间件，简化了我们处理CORS跨院的设置步骤，为我们在请求头上加上CORS，客户端即可跨域发送请求
 */
const Kcors = require('kcors');
// 跨域设置
const corsOptions = {
    'origin': '',
    'credentials': true,
    'maxAge': 3600
};
app.use(Kcors(corsOptions));

/**
 * 用来实现JSON-WEB-TOKEN的中间件，具体的后面关于登录的章节进行展开
 */
// const jwt = require('koa-jwt');
//
// router.use('/api', jwt({secret: db.jwtSecret}), apiRouter.routes()); // 所有走/api/打头的请求都需要经过jwt验证。


/**
 * 用来为服务端的静态文件开启压缩
 */
const Compress = require('koa-compress');

app.use(Compress({
    threshold: 2048 // 要压缩的最小响应字节
}));

/**
 * 用来实现访问静态资源，当我们使用webpack进行生产模式的打包之后，都放到了dist目录下，这个目录就作为Koa静态文件服务的目录：
 */
// const staticServer = require('koa-static');
// // 将webpack打包好的项目目录作为Koa静态文件服务的目录
// app.use(staticServer(path.resolve('dist')));


// const render = require('koa-swig');
// const co = require('co');
// const path = require('path');

// //koa v2.x 支持的文件模板
// app.context.render = co.wrap(render({
//     //设置简单的配置
//     root: path.join(__dirname, 'views'),//视口路径
//     autoescape: true,
//     cache: 'memory', // disable, set to false
//     ext: 'html',
//     writeBody: false
// }));

// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});


module.exports = app
