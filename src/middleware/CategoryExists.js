const CategoryService = require('../services/CategoryService');
const { internalError } = require('../helpers/commonMessages');

module.exports = async (req, _res, next) => {
  try {
    const { categoryIds } = req.body;
  
    await Promise.all(categoryIds.map(async (id) => {
      const category = await CategoryService.findById(+id);
  
      if (category.error) {
        return next(category.error);
      }
  
      return category;
    }));

    next();
  } catch (error) {
    return next(internalError(error));
  }
};