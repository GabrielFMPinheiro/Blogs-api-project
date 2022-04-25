const express = require('express');
const { UserController } = require('../controllers');
const { UserReqValidation, ValidateJWT } = require('../middleware');

const router = express.Router();

router.post('/', UserReqValidation, UserController.createUser);

router.use(ValidateJWT);

router.delete('/me', UserController.deleteUser);
router.get('/', UserController.findAll);
router.get('/:id', UserController.findById);

module.exports = router;