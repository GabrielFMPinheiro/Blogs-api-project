const { Category } = require('../models');

const createCategory = async (category) => {
  const { name } = category;
  
  try {
    const categoryExists = await Category.findOne({ where: { name } });

    if (categoryExists) {
      return ({ error:
        { code: 'conflict',
          message: 'Category already registered',
        } });
    }

    const newCategory = await Category.create({ name });

    return newCategory;
  } catch (error) {
    return ({ error:
      { code: 'internalServerError',
        message: 'Something went wrong',
      } });
  }
};

module.exports = {
  createCategory,
};