const { getAllScripts, getByPlot, getByCompanyId, getByName, createScript, getByScriptId, deleteScript, createFile } = require('../../controllers/scripts.controllers');
const { checkToken } = require('../../utils/middlewares');

const router = require('express').Router();

router.get('/', getAllScripts)
router.get('/plot/:plot', getByPlot)
router.get('/company/:user_id', getByCompanyId)
router.get('/name/:name', getByName)
router.get('/:id', getByScriptId)

router.post('/new_script', createScript)
router.post('/new_script_file', createFile)

router.delete('/delete/:id', deleteScript)

module.exports = router;