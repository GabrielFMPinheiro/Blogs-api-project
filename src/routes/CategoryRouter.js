const express = require('express');
const { CategoryController } = require('../controllers');
const { CategoryReqValidation, ValidateJWT } = require('../middleware');

const router = express.Router();

router.use(ValidateJWT);

router.post('/', CategoryReqValidation, CategoryController.createCategory);
router.get('/', CategoryController.findAll);

module.exports = router;