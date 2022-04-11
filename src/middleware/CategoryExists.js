const CategoryService = require('../services/CategoryService');

module.exports = async (req, _res, next) => {
  const { categoryIds } = req.body;

  await Promise.all(categoryIds.map(async (id) => {
    const category = await CategoryService.findById(+id);

    if (category.error) {
      return next(category.error);
    }

    return category;
  }));

  next();
};