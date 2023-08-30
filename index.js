const express = require('express');
const routerApi = require('./routes/index');

const app = express();
const port = 3000;
const IP = '172.16.30.13';

const { logErrors, errorHandler } = require('./middlewares/error.handler');

app.use(express.json());

app.get('/', (req, res) => {
  res.json('Home');
});

routerApi(app);
