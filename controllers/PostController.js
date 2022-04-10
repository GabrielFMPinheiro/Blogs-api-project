const { StatusCodes } = require('http-status-codes');
const PostService = require('../services/PostService');
require('dotenv').config();

const findAll = async (req, res, next) => {
  try {
    const posts = await PostService.findAll();

    return res.status(StatusCodes.OK).json(posts);
  } catch (error) {
    next({ error:
      { code: 'internalServerError',
        message: 'Something went wrong',
      } });
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
    next({ error:
      { code: 'internalServerError',
        message: 'Something went wrong',
      } });
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
    next({ error:
      { code: 'internalServerError',
        message: 'Something went wrong',
      } });
  }
};

module.exports = {  
  findAll,
  findById,
  updatePost,
};