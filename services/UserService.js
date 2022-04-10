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
    console.log(users);
    return users;
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
};