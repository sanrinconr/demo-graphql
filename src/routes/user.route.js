const express = require('express');
// const auth = require('../../middlewares/auth');
// const validate = require('../../middlewares/validate');
const userController = require('../controllers/user.controller');

const router = express.Router();

router
  .route('/')
//   .get(auth('getUsers'), validate(userValidation.getUsers), userController.getUsers);
  .get(userController.getUsers);


module.exports = router;

