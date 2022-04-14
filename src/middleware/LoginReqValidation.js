const Joi = require('joi');
const { internalError } = require('../helpers/commonMessages');

module.exports = (req, _res, next) => {
  try {
    const { email, password } = req.body;
  
    const { error } = Joi.object({
      email: Joi.string().min(1).required(),
      password: Joi.string().min(1).required(),
    }).validate({ email, password });
  
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