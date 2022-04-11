const PostService = require('../services/PostService');

module.exports = async (req, _res, next) => {
  const { params: { id }, user: { email } } = req;

  const post = await PostService.findById(+id);

  if (post.error) {
    return next(post.error);
  }

  if (post.user.email !== email) {
    return next({
      code: 'unauthorized',
      message: 'Unauthorized user',
    });
  }

  return next();
};