const { User } = require('../models');

const createUser = async (user) => {
  const { displayName, email, password, image } = user;

  try {
    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      return ({ error:
        { code: 'conflict',
          message: 'User already registered',
        } });
    }

    const newUser = await User.create({ displayName, email, password, image });

    return newUser;
  } catch (error) {
    return ({ error:
      { code: 'internalServerError',
        message: 'Something went wrong',
      } });
  }
};

const findAll = async () => {
  try {
    const users = await User.findAll();

    return users;
  } catch (error) {
    return ({ error:
      { code: 'internalServerError',
        message: 'Something went wrong',
      } });
  }
};

const findById = async (id) => {
  try {
    const user = await User.findByPk(id);

    if (!user) {
      return ({ error:
        { code: 'notFound',
          message: 'User does not exist',
        } });
    }

    return user;
  } catch (error) {
    return ({ error:
      { code: 'internalServerError',
        message: 'Something went wrong',
      } });
  }
};

const deleteUser = async (id) => {
  try {
    const linesAffected = await User.destroy(
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
  createUser,
  findAll,
  findById,
  deleteUser,
};