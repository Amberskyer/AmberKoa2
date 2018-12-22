const router = require('koa-router')()
const superagent = require('superagent');

router.get('/', async (ctx, next) => {
    //获取session
    console.log("登录状态时  :", ctx.session.userinfo);
    let userInfo = await superagent.get('http://127.0.0.1:1024/api/v1/user/1')
        .set('Content-Type', 'application/json;charset=UTF-8')
    await ctx.render('index', {
        title: 'Hello Koa 2!',
        htmldemo: '<div style="background-color: #00B7FF">5555555</div>',
        userInfo: userInfo.body.ret
    })
})


router.get('/login', async (ctx, next) => {
    await ctx.render('login', {
        title: '登录页面'
    })
})

router.get('/news', async (ctx, next) => {


    let userInfo = await superagent.get('http://127.0.0.1:1024/api/v1/user/1')
        .set('Content-Type', 'application/json;charset=UTF-8')
    await ctx.render('news', {
        title: 'Hello Koa 2!',
        htmldemo: '<div style="background-color: #00B7FF">5555555</div>',
        userInfo: userInfo.body.ret
    })
})

router.get('/tumblr', async (ctx, next) => {

    // let url = "https://createdforsir.tumblr.com/likes/page/{}"
    let url = "https://www.tumblr.com/following/0"
    const cookie = "rxx=bvhlc4tcm34.18c8fvmv&v=1; _ga=GA1.2.1375511658.1534905395; yx=7nxa6g9qrvznu%26o%3D3%26f%3D0c; _gid=GA1.2.1737024513.1543889912; __utmc=189990958; __utmz=189990958.1543889912.2.2.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); pfp=3bXyGVXztwteInsjxF0KvzW1K0Ckn5u1HGmDHK8O; pfs=TAhiUubsHQujhLhi2ZBkgeRFsU; pfe=1551666080; pfu=319672479; language=%2Czh_CN; logged_in=1; nts=true; pfx=2d5bdc7dd421f0a4f2c3990bbd55223beb8045c1bd5140b3505b3b83e9bc55e7%230%233931745475; capture=cr1Diuf0tv3vDyJuQvtEPEP4mg; tmgioct=5c05e4b206fa360414909790; __utma=189990958.1375511658.1534905395.1543894038.1543895902.4; __utmb=189990958.0.10.1543895902; devicePixelRatio=1; documentWidth=1537; pfg=60398d49ca5f8d38c2f6e8cd1abf1a7a7c69da8bf1ef80fe1139335cbe243118%23%7B%22gdpr_is_acceptable_age%22%3A1%2C%22exp%22%3A1575431910%2C%22vc%22%3A%22%22%7D%230569425999";//Please fill in your cookie

    let userInfo = await superagent.get(url)
        .set('cookie', cookie)
        .set('Content-Type', 'application/json;charset=UTF-8')
        .timeout({
            response: 5000,  // Wait 5 seconds for the server to start sending,
            deadline: 60000, // but allow 1 minute for the file to finish loading.
        })
    ctx.body = {
        info: userInfo.text
    }
})

router.get('/string', async (ctx, next) => {
    ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

module.exports = router
