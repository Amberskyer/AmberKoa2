const fileController = require('../../controller/fileController')
const router = require('koa-router')();


router.prefix('/file')


router.get('/list', fileController.getFileList);

router.get('/:id', fileController.getFileInfo)

router.post('/', fileController.createFile)

router.delete('/:id', fileController.destroyFile)

router.put('/:id', fileController.updateFile)


module.exports = router;
