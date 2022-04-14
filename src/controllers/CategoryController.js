const { StatusCodes } = require('http-status-codes');
const CategoryService = require('../services/CategoryService');
require('dotenv').config();
const { internalError } = require('../helpers/commonMessages');

const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
  
    const newCategory = await CategoryService.createCategory({ name });
  
    if (newCategory.error) {
      return next(newCategory.error);
    }

    return res.status(StatusCodes.CREATED).json(newCategory);
  } catch (error) {
    return next(internalError(error));
  }
};

const findAll = async (_req, res, next) => {
  try {
    const categories = await CategoryService.findAll();

    return res.status(StatusCodes.OK).json(categories);
  } catch (error) {
    next(internalError(error));
  }
};

module.exports = {
  createCategory,
  findAll,
};