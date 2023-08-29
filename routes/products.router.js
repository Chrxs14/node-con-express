const express = require('express');
const ProductsService = require('../services/products.service');
const router = express.Router();

const services = new ProductsService();

router.get('/', async (req, res) => {
  const products = await services.getProducts();
  res.json(products);
});

router.get('/filter', async (req, res) => {
  res.send('Soy un filter');
});

// Dinamicos

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await services.getProductById(parseInt(id));
  res.json(product);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = await services.updateProductById(parseInt(id), body);
  res.json(product);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await services.deleteProductById(parseInt(id));
  res.json(product);
});

router.post('/', async (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body,
  });
});

module.exports = router;
