const conflict = (name) => ({ error:
  { code: 'conflict',
    message: `${name} already registered`,
  } });

const internalError = (error) => ({ error:
  { code: 'internalServerError',
    message: error,
  } });

const badRequest = () => ({ error: {
  code: 'badRequest',
  message: 'Invalid fields',
} });

const notFound = (name) => ({ error: {
  code: 'notFound',
   message: `${name} does not exist`,
   } });

module.exports = {
  conflict,
  internalError,
  badRequest,
  notFound,
};
