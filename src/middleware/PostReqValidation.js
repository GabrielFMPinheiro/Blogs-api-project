const Joi = require('joi');

const reqPutMethod = (req, _res, next) => {
  const { title, content } = req.body;

  if (Object.keys(req.body).includes('categoryIds')) {
    return next({
      code: 'badRequest',
      message: 'Categories cannot be edited',
    });
  }

  const { error } = Joi.object({
    title: Joi.string().min(1).required(),
    content: Joi.string().min(1).required(),
  }).validate({ title, content });

  if (error) {
 return next({
    code: 'badRequest',
    message: error.details[0].message,
  }); 
}

  return next();
};

const reqPostMethod = (req, _res, next) => {
  const { title, categoryIds, content } = req.body;

  const { error } = Joi.object({
    title: Joi.string().min(1).required(),
    categoryIds: Joi.array().required(),
    content: Joi.string().min(1).required(),
  }).validate({ title, categoryIds, content });

  if (error) {
    return next({
       code: 'badRequest',
       message: error.details[0].message,
     });
  }

  return next();
};

module.exports = {
  reqPutMethod,
  reqPostMethod,
};