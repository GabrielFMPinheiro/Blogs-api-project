const express = require('express');
const UserController = require('../controllers/UserController');
const UserValidation = require('../middleware/UserValidation');
const validateJWT = require('../middleware/validateJWT');

const router = express.Router();

router.post('/', UserValidation, UserController.createUser);

router.use(validateJWT);

router.get('/', UserController.findAll);

module.exports = router;