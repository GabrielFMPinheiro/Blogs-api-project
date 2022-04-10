const express = require('express');
const CategoryController = require('../controllers/CategoryController');
const CategoryValidation = require('../middleware/CategoryValidation');
const validateJWT = require('../middleware/validateJWT');

const router = express.Router();

router.use(validateJWT);

router.post('/', CategoryValidation, CategoryController.createCategory);

module.exports = router;