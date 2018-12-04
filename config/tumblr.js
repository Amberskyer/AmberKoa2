const cookie = "rxx=bvhlc4tcm34.18c8fvmv&v=1; _ga=GA1.2.1375511658.1534905395; yx=7nxa6g9qrvznu%26o%3D3%26f%3D0c; _gid=GA1.2.1737024513.1543889912; __utmc=189990958; __utmz=189990958.1543889912.2.2.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); pfp=3bXyGVXztwteInsjxF0KvzW1K0Ckn5u1HGmDHK8O; pfs=TAhiUubsHQujhLhi2ZBkgeRFsU; pfe=1551666080; pfu=319672479; language=%2Czh_CN; logged_in=1; nts=true; pfx=2d5bdc7dd421f0a4f2c3990bbd55223beb8045c1bd5140b3505b3b83e9bc55e7%230%233931745475; capture=cr1Diuf0tv3vDyJuQvtEPEP4mg; tmgioct=5c05e4b206fa360414909790; __utma=189990958.1375511658.1534905395.1543889912.1543894038.3; __utmb=189990958.0.10.1543894038; devicePixelRatio=3; documentWidth=1008; pfg=4c9d62c24a4b94b699a9ea2b38c62302b519fed836539c921f2e946c2d2b4775%23%7B%22gdpr_is_acceptable_age%22%3A1%2C%22exp%22%3A1575430040%2C%22vc%22%3A%22%22%7D%236790681123";//Please fill in your cookie

module.exports = {
    cookie:cookie,
    headers:{
        "accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "accept-encoding":"gzip, deflate, sdch, br",
        "accept-language":"zh-CN,zh;q=0.8,zh-TW;q=0.6,en;q=0.4",
        "cache-control":"max-age=0",
        "cookie":cookie,
        "upgrade-insecure-requests":1,
        "user-agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
    },
    limit:0,//Limit crawler crawling data,default is 0(no limit)
    skip:0,// Skip the specified number
}