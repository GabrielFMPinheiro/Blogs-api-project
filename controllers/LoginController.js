const { StatusCodes } = require('http-status-codes');
const LoginService = require('../services/LoginService');
const { internalError } = require('../helpers/commonMessages');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await LoginService({ email, password });

    if (user.error) {
      return next(user.error);
    }
  
    return res.status(StatusCodes.OK).json({ token: user.token });
  } catch (error) {
    return next(internalError());
  }
};