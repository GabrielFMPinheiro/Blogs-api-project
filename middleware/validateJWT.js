const jwt = require('jsonwebtoken');
require('dotenv').config();
const { StatusCodes } = require('http-status-codes');
const { User } = require('../models');

module.exports = async (req, res, next) => {
  const { authorization: token } = req.headers;
  
  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'Expired or invalid token' });
      }
      const user = await User.findOne({ where: { email: decoded.data.email } });
      req.user = user;
    });

    next();
  } catch (error) {
    next({ error: { code: 'internalServerError', message: 'Something went wrong' } });
  }
};