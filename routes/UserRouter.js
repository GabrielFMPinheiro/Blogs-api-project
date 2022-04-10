const express = require('express');
const UserController = require('../controllers/UserController');
const UserValidation = require('../middleware/UserValidation');
const validateJWT = require('../middleware/validateJWT');

const router = express.Router();

router
  .post('/', UserValidation, UserController.createUser)
  .use(validateJWT)
  .get('/', UserController.findAll)
  .get('/:id', UserController.findById);

module.exports = router;