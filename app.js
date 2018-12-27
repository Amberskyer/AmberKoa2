const Koa = require('koa')
const app = new Koa()
const path = require('path');

/**
 * favicon图标
 */
const favicon = require('koa-favicon');
app.use(favicon(__dirname + '/public/favicon.ico'));


/**
 * 设置nunjucks模板语言
 */
const koaNunjucks = require('koa-nunjucks-2');
app.use(koaNunjucks({
    ext: 'njk',
    path: path.join(__dirname, './views'),
    nunjucksConfig: {
        trimBlocks: true
    }
}));


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

// /**
//  * 设置模板语言
//  */
// const views = require('koa-views')
// app.use(views(__dirname + '/views', {
//     extension: 'ejs'
// }))

// /**
//  * 配置 koa-art-template模板引擎
//  */
// const render = require('koa-art-template');
// render(app, {
//     root: path.join(__dirname, 'views'),   // 视图的位置
//     extname: '.html',  // 后缀名
//     debug: process.env.NODE_ENV !== 'production'  //是否开启调试模式
// });


const session = require('koa-session');
app.keys = ['sakura'];
const CONFIG = {
    key: 'koa:sess',
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: false,
};
app.use(session(CONFIG, app));



/**
 * 错误日志处理
 */
//log工具
const logUtil = require('./utils/logUtil');
// logger
app.use(async (ctx, next) => {
    //响应开始时间
    const start = new Date();
    //响应间隔时间
    let ms;
    try {
        //开始进入到下一个中间件
        await next();

        ms = new Date() - start;
        //记录响应日志
        logUtil.logResponse(ctx, ms);

    } catch (error) {

        ms = new Date() - start;
        //记录异常日志
        logUtil.logError(ctx, error, ms);
    }

});


/**
 * 自定义中间件
 */
const abToken = require('./middlewares/ab-token')
app.use(abToken())


/**
 * 用来实现JSON-WEB-TOKEN的中间件，具体的后面关于登录的章节进行展开
 */
// const jwt = require('koa-jwt');
// const serverConfig = require('./config/server');
// app.use(jwt({secret: serverConfig.jwtSecret}).unless({
//     path: [/^\/api\/v1\/register/, /^\/api\/v1\/login/, /^\/login/, /^\//] //数组中的路径不需要通过jwt验证
// }))


// /**
//  * 用来初始化api数据的中间件,有数据以及无数据的处理
//  */
// const response_formatter = require('./middlewares/response_formatter');
// //添加格式化处理响应结果的中间件，在添加路由之前调用
// app.use(response_formatter('^/api'));


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
const indexRoutes = require('./routes/index')
router.use(indexRoutes.routes(), indexRoutes.allowedMethods())
const javaScriptMasterRoutes = require('./routes/javaScriptMaster')
router.use(javaScriptMasterRoutes.routes(), javaScriptMasterRoutes.allowedMethods())


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


// const IO = require('koa-socket')
// const io = new IO()
//
//
// let socketIdList = []
// io.attach(app)
// app._io.on('connection', socket => {
//     const socketId = socket.id
//     console.log("socketId",socketId)
//     socketIdList.push(socketId)
//     socket.on('ask for new news', function (data) {
//         app._io.to(socketIdList[0]).emit('news', data);
//         app._io.to(socketIdList[1]).emit('news', data);
//     });
//     socket.on('update new news', function (data) {
//         socket.emit('news', data);
//     });
//     console.log("链接了啊啊啊啊啊啊")
// })
//
// app.listen(process.env.PORT || 1024)

module.exports = app
