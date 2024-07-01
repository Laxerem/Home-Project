const Router = require('express')
const router = new Router()
const UserController = require("../controller/user_controller.js")

router.post('/create_user', UserController.createUser)
router.get('/get_user/:name', UserController.getUser)

module.exports = router;