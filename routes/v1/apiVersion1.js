const router = require('koa-router')();

var user = require("./auth");

router.prefix('/api/v1')
router.use(user.routes(), user.allowedMethods())

module.exports = router;