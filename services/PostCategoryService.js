const { PostCategory } = require('../models');
const { internalError } = require('../helpers/commonMessages');

const createPostAndCategory = async (postId, categoryIds) => {
  try {
    await Promise.all(categoryIds.map(async (id) => (
      PostCategory.create({ postId, categoryId: id }))));
  } catch (error) {
    return (internalError());
  }
};

module.exports = {
  createPostAndCategory,
};