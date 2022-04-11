const Joi = require('joi');

module.exports = (req, _res, next) => {
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
};