const express = require('express');
const ProductsService = require('../services/products.service');
const router = express.Router();

const services = new ProductsService();

router.get('/', (req, res) => {
  const products = services.getProducts();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Soy un filter');
});

// Dinamicos

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = services.getProductById(parseInt(id));
  res.json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body,
  });
});

module.exports = router;
