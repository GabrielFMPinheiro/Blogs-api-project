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

const findById = async (id) => {
  try {
    const blog = await BlogPost.findOne({
      where: { id },
      include: [
         { model: User, as: 'user', attributes: { exclude: ['password'] } },
         { model: Category, as: 'categories', through: { attributes: [] } },
        ], 
      });

    if (!blog) {
        return ({ error: { code: 'notFound', message: 'Post does not exist' } });
      }

    return blog;
  } catch (error) {
    return ({ error:
      { code: 'internalServerError',
        message: 'Something went wrong',
      } });
  }
};

const updatePost = async (title, content, id) => {
  try {
    await BlogPost.update({ title, content }, { where: { id } });

    const postUpdated = await BlogPost.findOne({
      where: { id },
      attributes: ['title', 'content', 'userId'],
      include: [
         { model: Category, as: 'categories', through: { attributes: [] } },
        ], 
      });

    return postUpdated;
  } catch (error) {
    return ({ error:
      { code: 'internalServerError',
        message: 'Something went wrong',
      } });
  }
};

const deletePost = async (id) => {
  try {
    const linesAffected = await BlogPost.destroy(
      { where: { id } },
    );
    return linesAffected;
  } catch (error) {
        return ({ error:
      { code: 'internalServerError',
        message: 'Something went wrong',
      } });
  }
};

module.exports = {
  findAll,
  findById,
  updatePost,
  deletePost,
};