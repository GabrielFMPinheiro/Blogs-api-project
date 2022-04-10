const { StatusCodes } = require('http-status-codes');
const LoginService = require('../services/LoginService');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await LoginService({ email, password });

    if (user.error) {
      return next(user.error);
    }
  
    return res.status(StatusCodes.OK).json(user.token);
  } catch (error) {
    return next({ error:
      { code: 'internalServerError',
        message: 'Something went wrong',
      } });
  }
};