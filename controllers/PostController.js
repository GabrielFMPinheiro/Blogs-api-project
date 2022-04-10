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

module.exports = {  
  findAll,
};