const express = require('express');
const bodyParser = require('body-parser');

const UserRouter = require('./routes/UserRouter');
const LoginRouter = require('./routes/LoginRouter');

const errorMiddleware = require('./middleware/Error');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', UserRouter);
app.use('/login', LoginRouter);

app.use(errorMiddleware);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
