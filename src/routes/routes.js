const express = require("express");
const router = express.Router();
const userController = require('../controller/user/users');
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const varifyData = require('../middleware/validate.middleware')

router.post('/user/create',varifyData.varify_data, userController.createUser);
router.get('/user/get_all',userController.getAllUsers);
router.get('/user/get_user/:id', userController.get_user);
router.patch('/user/update/:id',varifyData.varify_data,userController.updateuser);
router.delete('/user/remove/:id', userController.removeUser);

module.exports = router;