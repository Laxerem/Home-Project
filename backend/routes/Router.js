const Router = require('express')
const router = new Router()
const UserController = require("../controller/user_controller.js")

router.post('/user', UserController.createUser)
router.get('/get_users', UserController.getUsers)

module.exports = router;