const router = require('koa-router')();
const apiVersion1 = require('./v1/apiVersion1')
const apiVersion2 = require('./v2/apiVersion2')

router.use(apiVersion1.routes(), apiVersion1.allowedMethods())
router.use(apiVersion2.routes(), apiVersion2.allowedMethods())

module.exports = router;