const express = require('express');
const CategoryController = require('../controllers/CategoryController');
const CategoryValidation = require('../middleware/CategoryValidation');
const ValidateJWT = require('../middleware/ValidateJWT');

const router = express.Router();

router
  .use(ValidateJWT)
  .post('/', CategoryValidation, CategoryController.createCategory)
  .get('/', CategoryController.findAll);

module.exports = router;