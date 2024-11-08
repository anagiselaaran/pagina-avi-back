const { getUsers, createUser, login, getByCompanyName, getProyectByUser, getUserByID } = require('../../controllers/user.controller');
const { checkToken } = require('../../utils/middlewares');

const router = require('express').Router();


router.get('/', getUsers)
router.get('/company_name/:name', checkToken, getByCompanyName)
router.get('/users-projects/:id', getProyectByUser)
router.get('/user/:id', getUserByID)

router.post('/new', createUser)
router.post('/login', login)


module.exports = router;