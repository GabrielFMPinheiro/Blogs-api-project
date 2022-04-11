const express = require('express');
const UserController = require('../controllers/UserController');
const UserValidation = require('../middleware/UserReqValidation');
const ValidateJWT = require('../middleware/ValidateJWT');

const router = express.Router();

router
  .post('/', UserValidation, UserController.createUser)
  .use(ValidateJWT)
  .delete('/me', UserController.deleteUser)
  .get('/', UserController.findAll)
  .get('/:id', UserController.findById);

module.exports = router;