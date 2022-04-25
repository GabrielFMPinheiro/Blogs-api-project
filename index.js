const express = require('express');
const bodyParser = require('body-parser');

const UserRouter = require('./src/routes/UserRouter');
const LoginRouter = require('./src/routes/LoginRouter');
const CategoryRouter = require('./src/routes/CategoryRouter');
const PostRouter = require('./src/routes/PostRouter');

const errorMiddleware = require('./src/middleware/Error');

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.use('/user', UserRouter);
app.use('/login', LoginRouter);
app.use('/categories', CategoryRouter);
app.use('/post', PostRouter);

app.use(errorMiddleware);

app.listen(port, () => console.log(`ouvindo porta ${port}!`));

module.exports = app;
