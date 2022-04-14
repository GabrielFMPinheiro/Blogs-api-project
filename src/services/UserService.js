const { User } = require('../models');
const { conflict, internalError, notFound } = require('../helpers/commonMessages');

const createUser = async (user) => {
  const { displayName, email, password, image } = user;

  try {
    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      return (conflict('User'));
    }

    const newUser = await User.create({ displayName, email, password, image });

    return newUser;
  } catch (error) {
    return (internalError(error));
  }
};

const findAll = async () => {
  try {
    const users = await User.findAll();

    return users;
  } catch (error) {
    return (internalError(error));
  }
};

const findById = async (id) => {
  try {
    const user = await User.findByPk(id);

    if (!user) {
      return (notFound('User'));
    }

    return user;
  } catch (error) {
    return (internalError(error));
  }
};

const deleteUser = async (id) => {
  try {
    const linesAffected = await User.destroy(
      { where: { id } },
    );
    return linesAffected;
  } catch (error) {
      return (internalError(error));
  }
};

module.exports = {
  createUser,
  findAll,
  findById,
  deleteUser,
};