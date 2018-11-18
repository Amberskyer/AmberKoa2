const config = {
    koa2: {
        dbname: 'koa2',
        uname: 'root',
        upwd: '12345678',
        host: '127.0.0.1',
        port: 3306,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000,
            acquire: 20000
        },
        dialectOptions: {
            requestTimeout: 999999,
            // instanceName:'DEV'
        }  //设置MSSQL超时时间
    },
}

module.exports = config;