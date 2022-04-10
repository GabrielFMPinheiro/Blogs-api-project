const { StatusCodes } = require('http-status-codes');

module.exports = (err, _req, res, _next) => {
  let status = '';

  switch (err.code) {
    case 'unprocessableEntity':
      status = StatusCodes.UNPROCESSABLE_ENTITY;
      break;
    case 'badRequest':
      status = StatusCodes.BAD_REQUEST;
      break;
    case 'notFound':
      status = StatusCodes.NOT_FOUND;
      break;
    case 'internalServerError':
      status = StatusCodes.INTERNAL_SERVER_ERROR;
      break;
    default:
      status = StatusCodes.CONFLICT;
  }

  return res.status(status).json({ message: err.message });
};