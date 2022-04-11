const express = require('express');
const PostController = require('../controllers/PostController');
const ValidateJWT = require('../middleware/ValidateJWT');
const PostReqValidation = require('../middleware/PostReqValidation');
const CorrectAuthorOfThePost = require('../middleware/CorrectAuthorOfThePost');
const CategoryExists = require('../middleware/CategoryExists');

const router = express.Router();

router
  .use(ValidateJWT)
  .get('/search', PostController.searchPost)
  .post('/', PostReqValidation.reqPostMethod, CategoryExists, PostController.createPost)
  .get('/', PostController.findAll)
  .get('/:id', PostController.findById)
  .delete('/:id', CorrectAuthorOfThePost, PostController.deletePost)
  .put('/:id', CorrectAuthorOfThePost, PostReqValidation.reqPutMethod, PostController.updatePost);

module.exports = router;