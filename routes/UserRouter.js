const express = require('express');
const UserController = require('../controllers/UserController');
const UserValidation = require('../middleware/UserValidation');

const router = express.Router();

router.use(UserValidation);

router.post('/', UserController.createUser);

module.exports = router;