const express = require('express');
const PostController = require('../controllers/PostController');
const validateJWT = require('../middleware/validateJWT');

const router = express.Router();

router
  .use(validateJWT)
  .get('/', PostController.findAll);

module.exports = router;