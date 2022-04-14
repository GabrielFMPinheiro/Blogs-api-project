const { Op } = require('sequelize');
const { BlogPost, Category, User } = require('../models');
const { notFound, internalError } = require('../helpers/commonMessages');

const createPost = async (userId, title, categoryIds, content) => {
  try {
    const newPost = await BlogPost.create({ userId, title, content });

    return newPost;
  } catch (error) {
    return (internalError(error));
  }
};

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
    return (internalError(error));
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

    if (!blog) return (notFound('Post'));

    return blog;
  } catch (error) {
    return (internalError(error));
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
    return (internalError(error));
  }
};

const deletePost = async (id) => {
  try {
    const linesAffected = await BlogPost.destroy(
      { where: { id } },
    );
    return linesAffected;
  } catch (error) {
        return (internalError(error));
  }
};

const searchPost = async (query) => {
  try {
    const where = [];
    if (query !== '') {
      where.push({ [Op.or]: [{ title: query }, { content: query },
      ],
    });
    } 

    const blogs = await BlogPost.findAll({
      where,
       include: [
         { model: User, as: 'user', attributes: { exclude: ['password'] } },
         { model: Category, as: 'categories', through: { attributes: [] } },
        ], 
      });

    return blogs;
  } catch (error) {
    return (internalError(error));
  }
};

module.exports = {
  findAll,
  findById,
  updatePost,
  deletePost,
  searchPost,
  createPost,
};