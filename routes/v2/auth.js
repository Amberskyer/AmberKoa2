const userController = require('../../controller/userController')
const router = require('koa-router')();


router.prefix('/user')

router.get('/list', userController.getUserInfo);
router.get('/:id', userController.getUserInfo);

// router.post('/user', userController.postUserAuth);

module.exports = router;
