const express = require('express');
const LoginController = require('../controllers/LoginController');
const LoginValidation = require('../middleware/LoginValidation');

const router = express.Router();

router.use(LoginValidation);

router.post('/', LoginController);

module.exports = router;