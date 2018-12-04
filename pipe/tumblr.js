var superagent = require('superagent');


//HTML解析库
var cheerio = require('cheerio');

loadHtml()


async function loadHtml() {
    let urlCount = 0
    try {
        //
        // var result = await sqldb.youzy.transaction(function (t) {
        //     console.log("+++++++++++++++++++");
        //     return sqldb.NewPlan.findAndCountAll({
        //         where: {
        //             isHave: 5,
        //             // id: 13,
        //         },
        //         limit: 4
        //     }, {
        //         transaction: t
        //     }).catch(function (err) {
        //         loadHtml()
        //         console.log("发生错误：" + err);
        //     });
        // })

        for (let i = 0; i < 10; i++) {



            // let url = "https://createdforsir.tumblr.com/likes/page/{}"
            let url = "https://www.tumblr.com/following/0"
            const cookie = "rxx=bvhlc4tcm34.18c8fvmv&v=1; _ga=GA1.2.1375511658.1534905395; yx=7nxa6g9qrvznu%26o%3D3%26f%3D0c; _gid=GA1.2.1737024513.1543889912; __utmc=189990958; __utmz=189990958.1543889912.2.2.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); pfp=3bXyGVXztwteInsjxF0KvzW1K0Ckn5u1HGmDHK8O; pfs=TAhiUubsHQujhLhi2ZBkgeRFsU; pfe=1551666080; pfu=319672479; language=%2Czh_CN; logged_in=1; nts=true; pfx=2d5bdc7dd421f0a4f2c3990bbd55223beb8045c1bd5140b3505b3b83e9bc55e7%230%233931745475; capture=cr1Diuf0tv3vDyJuQvtEPEP4mg; tmgioct=5c05e4b206fa360414909790; __utma=189990958.1375511658.1534905395.1543889912.1543894038.3; __utmb=189990958.0.10.1543894038; devicePixelRatio=3; documentWidth=1008; pfg=4c9d62c24a4b94b699a9ea2b38c62302b519fed836539c921f2e946c2d2b4775%23%7B%22gdpr_is_acceptable_age%22%3A1%2C%22exp%22%3A1575430040%2C%22vc%22%3A%22%22%7D%236790681123";//Please fill in your cookie

            superagent.get(url)
                .set('header',{
                    "accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
                    "accept-encoding":"gzip, deflate, sdch, br",
                    "accept-language":"zh-CN,zh;q=0.8,zh-TW;q=0.6,en;q=0.4",
                    "cache-control":"max-age=0",
                    "cookie":cookie,
                    "upgrade-insecure-requests":1,
                    "user-agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
                })
                .set('Content-Type', 'application/json;charset=UTF-8')
                .timeout({
                    response: 5000,  // Wait 5 seconds for the server to start sending,
                    deadline: 60000, // but allow 1 minute for the file to finish loading.
                })
                .then(function (res) {

                    console.log(res)
                })


        }


    } catch (error) {
        console.error(error);
    }
}


