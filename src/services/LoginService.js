const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { badRequest, internalError } = require('../helpers/commonMessages');

module.exports = async (userDetails) => {
  try {
    const { email, password } = userDetails;
  
    const user = await User.findOne({ where: { email } });
  
    if (!user || user.password !== password) {
      return (badRequest());
    }
  
    const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };
  
    const token = jwt.sign({ data: user }, process.env.JWT_SECRET, jwtConfig);
  
    return { token };
  } catch (error) {
    return (internalError(error));
  }
};