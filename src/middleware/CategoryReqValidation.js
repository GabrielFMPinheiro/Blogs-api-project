const Joi = require('joi');
const { internalError } = require('../helpers/commonMessages');

module.exports = (req, _res, next) => {
  try {
    const { name } = req.body;
  
    const { error } = Joi.object({
      name: Joi.string().min(1).required(),
    }).validate({ name });
  
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