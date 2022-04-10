const { BlogPost, Category, User } = require('../models');

const findAll = async () => {
  try {
    const blogs = await BlogPost.findAll({
       include: [
         { model: User, as: 'user', attributes: { exclude: ['password'] } },
         { model: Category, as: 'categories', through: { attributes: [] } },
        ], 
      });

    return blogs;
  } catch (error) {
    return ({ error:
      { code: 'internalServerError',
        message: 'Something went wrong',
      } });
  }
};

module.exports = {
  findAll,
};