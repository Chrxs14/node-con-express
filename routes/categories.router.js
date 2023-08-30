const express = require('express');
const CateroriesService = require('../services/categories.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createCategorySchema,
  updateCategorySchema,
  getCategorySchema,
} = require('../schemas/categories.schema');

const router = express.Router();
const services = new CateroriesService();

router.get('/', async (req, res) => {
  const categories = await services.getCategories();
  res.json(categories);
});

router.get(
  '/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {},
);

router.get('/:id/products/:productId', (req, res) => {
  const { id, productId } = req.params;
  res.json({
    name: `Producto ${productId} de la categoria ${id}`,
    price: 1000,
  });
});

module.exports = router;
