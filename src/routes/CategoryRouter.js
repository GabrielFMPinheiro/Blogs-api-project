const express = require('express');
const CategoryController = require('../controllers/CategoryController');
const CategoryValidation = require('../middleware/CategoryReqValidation');
const ValidateJWT = require('../middleware/ValidateJWT');

const router = express.Router();

router.use(ValidateJWT);

router.post('/', CategoryValidation, CategoryController.createCategory);
router.get('/', CategoryController.findAll);

module.exports = router;