const { StatusCodes } = require('http-status-codes');
const CategoryService = require('../services/CategoryService');
require('dotenv').config();

const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
  
    const newCategory = await CategoryService.createCategory({ name });
  
    if (newCategory.error) {
      return next(newCategory.error);
    }

    return res.status(StatusCodes.CREATED).json(newCategory);
  } catch (error) {
    return next({ error:
      { code: 'internalServerError',
        message: 'Something went wrong',
      } });
  }
};

const findAll = async (req, res, next) => {
  try {
    const categories = await CategoryService.findAll();

    return res.status(StatusCodes.OK).json(categories);
  } catch (error) {
    next({ error:
      { code: 'internalServerError',
        message: 'Something went wrong',
      } });
  }
};

module.exports = {
  createCategory,
  findAll,
};