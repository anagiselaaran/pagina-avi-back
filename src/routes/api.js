const router = require('express').Router();

router.use('/users', require('./api/users'))
router.use('/scripts', require('./api/scripts'))

module.exports = router;