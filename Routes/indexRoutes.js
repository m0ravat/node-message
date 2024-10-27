const { Router } = require('express');
const indexRouter = Router();
const { body, validationResult } = require('express-validator'); // Add this line to import 'body'
const EmptyUserError = require('../Errors/emptyError');
const usersController = require("../Controller/userController");

indexRouter.get("/", usersController.usersListGet);
indexRouter.get("/new", usersController.usersCreateGet);
indexRouter.post("/new", usersController.usersCreatePost);


module.exports = indexRouter;
