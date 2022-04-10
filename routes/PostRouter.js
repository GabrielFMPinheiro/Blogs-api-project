const express = require('express');
const PostController = require('../controllers/PostController');
const ValidateJWT = require('../middleware/ValidateJWT');
const PostReqValidation = require('../middleware/PostReqValidation');
const CorrectAuthorOfThePost = require('../middleware/CorrectAuthorOfThePost');

const router = express.Router();

router
  .use(ValidateJWT)
  .get('/', PostController.findAll)
  .get('/:id', PostController.findById)
  .put('/:id', CorrectAuthorOfThePost, PostReqValidation, PostController.updatePost);

module.exports = router;