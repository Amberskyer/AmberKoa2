const userController = require('../../controller/userController')
const router = require('koa-router')();


router.prefix('/user')


router.get('/list', userController.getUserList);

router.get('/:id', userController.getUserInfo)

router.post('/', userController.createUser)

router.delete('/:id', userController.destroyUser)

router.put('/:id', userController.updateUser)


module.exports = router;
