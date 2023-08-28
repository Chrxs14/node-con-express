const express = require('express');
const router = express.Router();

router.get('/:id/products', (req, res) => {
  const { id } = req.params;
  res.json([
    {
      id: 0,
      name: `Producto 1 de la categoria ${id}`,
      price: 1000,
    },
    {
      id: 1,
      name: `Producto 2 de la categoria ${id}`,
      price: 2000,
    },
    {
      id: 2,
      name: `Producto 3 de la categoria ${id}`,
      price: 3000,
    },
  ]);
});

router.get('/:id/products/:productId', (req, res) => {
  const { id, productId } = req.params;
  res.json({
    name: `Producto ${productId} de la categoria ${id}`,
    price: 1000,
  });
});

module.exports = router;
