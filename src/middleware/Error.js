const { StatusCodes } = require('http-status-codes');

module.exports = (err, _req, res, _next) => {
  let status = '';

  switch (err.code) {
    case 'unauthorized':
      status = StatusCodes.UNAUTHORIZED;
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