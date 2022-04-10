const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const UserService = require('../services/UserService');
require('dotenv').config();

const createUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
  
    const newUser = await UserService.createUser({ displayName, email, password, image });
  
    if (newUser.error) {
      return next(newUser.error);
    }

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: newUser }, process.env.JWT_SECRET, jwtConfig);
  
    return res.status(StatusCodes.CREATED).json({ token });
  } catch (error) {
    return next({ error:
      { code: 'internalServerError',
        message: 'Something went wrong',
      } });
  }
};

const findAll = async (req, res, next) => {
  try {
    const users = await UserService.findAll();

    return res.status(StatusCodes.OK).json(users);
  } catch (error) {
    next({ error:
      { code: 'internalServerError',
        message: 'Something went wrong',
      } });
  }
};

module.exports = {  
  createUser,
  findAll,
};