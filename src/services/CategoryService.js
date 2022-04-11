const { Category } = require('../models');
const { conflict, internalError } = require('../helpers/commonMessages');

const createCategory = async (category) => {
  const { name } = category;
  
  try {
    const categoryExists = await Category.findOne({ where: { name } });

    if (categoryExists) {
      return (conflict('Category'));
    }

    const newCategory = await Category.create({ name });

    return newCategory;
  } catch (error) {
    return (internalError());
  }
};

const findAll = async () => {
  try {
    const categories = await Category.findAll();

    return categories;
  } catch (error) {
    return (internalError());
  }
};

const findById = async (id) => {
  try {
    const category = await Category.findByPk(id);

    if (!category) {
      return (
        { error:
          { code: 'badRequest',
            message: '"categoryIds" not found',
          } }
      );
    }

    return category;
  } catch (error) {
    return (internalError());
  }
};

module.exports = {
  createCategory,
  findAll,
  findById,
};