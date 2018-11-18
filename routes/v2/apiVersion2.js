const router = require('koa-router')();

const user = require("./auth");

// router.prefix('/api/v2')
router.use(user.routes(), user.allowedMethods())

module.exports = router;