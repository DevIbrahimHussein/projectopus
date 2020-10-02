var express = require('express')
var router = express.Router

// require controllers 
const UserController = require('../controllers/user')

router.post('/api/login/' , UserController.login)

router.post('/api/register/' , UserController.register)

module.exports = router