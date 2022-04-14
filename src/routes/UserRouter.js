const express = require('express');
const UserController = require('../controllers/UserController');
const UserValidation = require('../middleware/UserReqValidation');
const ValidateJWT = require('../middleware/ValidateJWT');

const router = express.Router();

router.post('/', UserValidation, UserController.createUser);

router.use(ValidateJWT);

router.delete('/me', UserController.deleteUser);
router.get('/', UserController.findAll);
router.get('/:id', UserController.findById);

module.exports = router;