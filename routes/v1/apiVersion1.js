const router = require('koa-router')();

const auth = require("./auth");
const user = require("./user");
const folder = require("./folder");
const file = require("./file");
const files = require("./files");
const tf = require("./tf");

router.prefix('/api/v1')
router.use(auth.routes(), auth.allowedMethods())
router.use(user.routes(), user.allowedMethods())
router.use(folder.routes(), folder.allowedMethods())
router.use(file.routes(), file.allowedMethods())
router.use(files.routes(), files.allowedMethods())
router.use(tf.routes(), tf.allowedMethods())

module.exports = router;