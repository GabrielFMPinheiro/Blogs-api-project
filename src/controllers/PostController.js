const { StatusCodes } = require('http-status-codes');
const { PostService, PostCategoryService } = require('../services');
const { internalError } = require('../helpers/commonMessages');

const createPost = async (req, res, next) => {
  try {
    const { title, categoryIds, content } = req.body;
    const { id } = req.user;

    const newPost = await PostService.createPost(+id, title, categoryIds, content);

    await PostCategoryService.createPostAndCategory(newPost.id, categoryIds);

    return res.status(StatusCodes.CREATED).json(newPost);
  } catch (error) {
    next(internalError(error));
  }
};

const findAll = async (_req, res, next) => {
  try {
    const posts = await PostService.findAll();

    return res.status(StatusCodes.OK).json(posts);
  } catch (error) {
    next(internalError(error));
  }
};

const findById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await PostService.findById(+id);

    if (post.error) {
      return next(post.error);
    }

    return res.status(StatusCodes.OK).json(post);
  } catch (error) {
    next(internalError(error));
  }
};

const updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const postUpdated = await PostService.updatePost(title, content, +id);

    if (postUpdated.error) {
      return next(postUpdated.error);
    }

    return res.status(StatusCodes.OK).json(postUpdated);
  } catch (error) {
    next(internalError(error));
  }
};

const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;

    await PostService.deletePost(+id);

    return res.status(StatusCodes.NO_CONTENT).end();
  } catch (error) {
    next(internalError(error));
  }
};

const searchPost = async (req, res, next) => {
  try {
    const { q } = req.query;
    
    const posts = await PostService.searchPost(q);

    return res.status(StatusCodes.OK).json(posts);
  } catch (error) {
    next(internalError(error));
  }
};

module.exports = {  
  findAll,
  findById,
  updatePost,
  deletePost,
  searchPost,
  createPost,
};