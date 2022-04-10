const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User } = require('../models');

module.exports = async (req, res, next) => {
  const { authorization: token } = req.headers;
  
  if (!token) {
    return next({ code: 'unauthorized', message: 'Token not found' });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return next({ code: 'unauthorized', message: 'Expired or invalid token' });
      }
      const user = await User.findOne({ where: { email: decoded.data.email } });

      req.user = user.dataValues;

      next();
    });
  } catch (error) {
    next({ error: { code: 'internalServerError', message: 'Something went wrong' } });
  }
};