const express = require('express');
const bodyParser = require('body-parser');

const UserRouter = require('./src/routes/UserRouter');
const LoginRouter = require('./src/routes/LoginRouter');
const CategoryRouter = require('./src/routes/CategoryRouter');
const PostRouter = require('./src/routes/PostRouter');

const errorMiddleware = require('./src/middleware/Error');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', UserRouter);
app.use('/login', LoginRouter);
app.use('/categories', CategoryRouter);
app.use('/post', PostRouter);

app.use(errorMiddleware);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

module.exports = app;
