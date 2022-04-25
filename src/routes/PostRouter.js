const express = require('express');
const { PostController } = require('../controllers');
const {
  ValidateJWT,
  PostReqValidation,
  CorrectAuthorOfThePost,
  CategoryExists,
} = require('../middleware');

const router = express.Router();

router.use(ValidateJWT);

router.get('/search', PostController.searchPost);
router.post('/', PostReqValidation.reqPostMethod, CategoryExists, PostController.createPost);
router.get('/', PostController.findAll);
router.get('/:id', PostController.findById);

router.delete('/:id', CorrectAuthorOfThePost, PostController.deletePost);
router.put('/:id',
CorrectAuthorOfThePost,
PostReqValidation.reqPutMethod,
PostController.updatePost);

module.exports = router;