const userController = require('../../controller/userController')
const sendmsgController = require('../../controller/sendmsg');
const router = require('koa-router')();


// router.prefix('/user')

router.post('/login', userController.postUserAuth);
router.post('/loginForForm', userController.postUserAuthForForm);
router.post('/register', userController.createUser);

//发送短信
router.get('/sendmsg', sendmsgController.send);


module.exports = router;
