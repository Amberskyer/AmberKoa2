const folderController = require('../../controller/folderController')
const router = require('koa-router')();


router.prefix('/folder')


router.get('/list', folderController.getFolderList);

router.get('/:id', folderController.getFolderInfo)

router.post('/', folderController.createFolder)

router.delete('/:id', folderController.destroyFolder)

router.put('/:id', folderController.updateFolder)


module.exports = router;
