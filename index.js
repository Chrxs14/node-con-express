const express = require('express');
const routerApi = require('./routes/index');

const app = express();
const port = 3000;

const { logErrors, errorHandler } = require('./middlewares/error.handler');

app.use(express.json());

app.get('/', (req, res) => {
  res.json('Home');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
