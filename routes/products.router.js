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
  const product = await services.getProductById(id);
  res.json(product);
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await services.updateProductById(id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: 'Product not found',
    });
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await services.getProductById(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = services.createProduct(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await services.updateProductById(parseInt(id), body);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rta = services.deleteProductById(parseInt(id));
  res.json(rta);
});

module.exports = router;
