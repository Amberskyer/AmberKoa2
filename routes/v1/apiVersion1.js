const router = require('koa-router')();

const auth = require("./auth");
const user = require("./user");
const tf = require("./tf");

router.prefix('/api/v1')
router.use(auth.routes(), auth.allowedMethods())
router.use(user.routes(), user.allowedMethods())
router.use(tf.routes(), tf.allowedMethods())

module.exports = router;