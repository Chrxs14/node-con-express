const express = require('express');
const routerApi = require('./routes/index');

const app = express();
const port = 3000;
const IP = '172.16.30.13';

app.use(express.json());

routerApi(app);

app.get('/', (req, res) => {
  res.json('Home');
});

app.patch('/:id', (req, res) => {
  const { id } = req.params;
  if (id === '999') {
    res.status(404).json({
      message: 'Not found',
    });
  } else {
    const { id } = req.params;
    const body = req.body;
    res.status(201).json({
      message: `Actualizando el producto ${id}`,
      data: body,
      id,
    });
  }
});

app.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: `Eliminando el producto ${id}`,
  });
});

app.listen(port, () => {
  console.log(`Listening http://${IP}:${port}`);
});
