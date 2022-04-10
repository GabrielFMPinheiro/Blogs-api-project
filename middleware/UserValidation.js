const Joi = require('joi');

module.exports = (req, _res, next) => {
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
};