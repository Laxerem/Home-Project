const Router = require('express')
const router = new Router()
const UserController = require("../controller/user_controller.js")

router.post('/user', UserController.createUser)
router.get('/get_users', UserController.getUsers)
router.get('/get_user', UserController.getOneUser)

module.exports = router;