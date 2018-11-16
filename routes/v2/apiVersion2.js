const router = require('koa-router')();

var user = require("./auth");

// router.prefix('/api/v2')
router.use(user.routes(), user.allowedMethods())

module.exports = router;