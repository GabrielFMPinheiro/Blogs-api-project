const Joi = require('joi');

module.exports = (req, _res, next) => {
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
};