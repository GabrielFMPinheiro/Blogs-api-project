const Joi = require('joi');
const { internalError } = require('../helpers/commonMessages');

module.exports = (req, _res, next) => {
  try {
    const { displayName, email, password } = req.body;
  
    const { error } = Joi.object({
      displayName: Joi.string().min(8).required(),
      email: Joi.string().email().min(8).required(),
      password: Joi.string().length(6).required(),
    }).validate({ displayName, email, password });
  
    if (error) {
   return next({
      code: 'badRequest',
      message: error.details[0].message,
    }); 
  }
  
    next();
  } catch (error) {
    return next(internalError(error));
  }
};