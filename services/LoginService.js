const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

module.exports = async (userDetails) => {
  const { email, password } = userDetails;

  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return ({ error: {
      code: 'badRequest',
      message: 'Invalid fields',
    } });
  }

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user }, process.env.JWT_SECRET, jwtConfig);

  return { token };
};