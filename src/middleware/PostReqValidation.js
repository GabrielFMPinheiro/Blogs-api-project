const Joi = require('joi');
const { internalError } = require('../helpers/commonMessages');

const reqPutMethod = (req, _res, next) => {
  try {
    const { title, content } = req.body;
  
    if (Object.keys(req.body).includes('categoryIds')) {
      return next({ code: 'badRequest', message: 'Categories cannot be edited' });
    }
  
    const { error } = Joi.object({
      title: Joi.string().min(1).required(),
      content: Joi.string().min(1).required(),
    }).validate({ title, content });
  
    if (error) {
   return next({ code: 'badRequest', message: error.details[0].message }); 
  }
  
    return next();
  } catch (error) {
    return next(internalError(error));
  }
};

const reqPostMethod = (req, _res, next) => {
  try {
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
  } catch (error) {
    return next(internalError(error));
  }
};

module.exports = {
  reqPutMethod,
  reqPostMethod,
};