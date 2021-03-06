const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const { UserService } = require('../services');
const { internalError } = require('../helpers/commonMessages');

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
    return next(internalError(error));
  }
};

const findAll = async (_req, res, next) => {
  try {
    const users = await UserService.findAll();

    return res.status(StatusCodes.OK).json(users);
  } catch (error) {
    next(internalError(error));
  }
};

const findById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await UserService.findById(+id);

    if (user.error) {
      return next(user.error);
    }

    return res.status(StatusCodes.OK).json(user);
  } catch (error) {
    next(internalError(error));
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { user } = req;
    await UserService.deleteUser(user.id);

    return res.status(StatusCodes.NO_CONTENT).end();
  } catch (error) {
    next(internalError(error));
  }
};

module.exports = {  
  createUser,
  findAll,
  findById,
  deleteUser,
};