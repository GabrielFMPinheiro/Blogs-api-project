const express = require('express');
const CategoryController = require('../controllers/CategoryController');
const CategoryValidation = require('../middleware/CategoryValidation');
const validateJWT = require('../middleware/validateJWT');

const router = express.Router();

router
  .use(validateJWT)
  .post('/', CategoryValidation, CategoryController.createCategory)
  .get('/', CategoryController.findAll);

module.exports = router;