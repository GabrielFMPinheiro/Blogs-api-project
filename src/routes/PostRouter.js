const express = require('express');
const PostController = require('../controllers/PostController');
const ValidateJWT = require('../middleware/ValidateJWT');
const PostReqValidation = require('../middleware/PostReqValidation');
const CorrectAuthorOfThePost = require('../middleware/CorrectAuthorOfThePost');
const CategoryExists = require('../middleware/CategoryExists');

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