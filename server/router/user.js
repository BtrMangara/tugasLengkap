const userRoutes = require('express').Router();
const userController = require('../controller/userController')

userRoutes.get('/',userController.getUser)
userRoutes.post('/login',userController.login)

module.exports = userRoutes;

