const Koa = require('koa')
const app = new Koa()

/**
 * favicon图标
 */
const favicon = require('koa-favicon');
app.use(favicon(__dirname + '/public/favicon.ico'));


/**
 * Error handler
 */
const onerror = require('koa-onerror')
onerror(app)

/**
 * HTTP请求体解析中间件
 */
const bodyparser = require('koa-bodyparser')
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
 * 自定义中间件
 */
const pv = require('./middleware/koa-pv')
app.use(pv())


/**o
 * 用来实现JSON-WEB-TOKEN的中间件，具体的后面关于登录的章节进行展开
 */
const jwt = require('koa-jwt');
const serverConfig = require('./config/server');
app.use(jwt({secret: serverConfig.jwtSecret}).unless({
    path: [/^\/api\/login/] //数组中的路径不需要通过jwt验证
}))

/**
 * 设置挂载路由
 */
const router = require('koa-router')();
app.use(router.routes());




/**
 * koa-logger是koa的日志模块，在安装、挂载之后，命令程序就会在控制台自动打印日志
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
 * 用来为服务端的静态文件开启压缩
 */
const Compress = require('koa-compress');
app.use(Compress({
    threshold: 2048 // 要压缩的最小响应字节
}));





/**
 * 用来实现访问静态资源，当我们使用webpack进行生产模式的打包之后，都放到了dist目录下，这个目录就作为Koa静态文件服务的目录：
 */
const staticServer = require('koa-static');
const path = require('path');
// 将webpack打包好的项目目录作为Koa静态文件服务的目录
app.use(staticServer(path.resolve('dist')));


// const render = require('koa-swig');
// const co = require('co');

// //koa v2.x 支持的文件模板
// app.context.render = co.wrap(render({
//     //设置简单的配置
//     root: path.join(__dirname, 'views'),//视口路径
//     autoescape: true,
//     cache: 'memory', // disable, set to false
//     ext: 'html',
//     writeBody: false
// }));




/**
 * 挂载用户路由
 */
const apiRoutes = require('./routes/apiRoutes')
router.use(apiRoutes.routes(), apiRoutes.allowedMethods())




// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)// 显示执行的时间
})

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});


module.exports = app
