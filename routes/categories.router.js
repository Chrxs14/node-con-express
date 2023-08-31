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
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await services.getCategoriesById(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  },
);

router.get('/:id/products/:productId', (req, res) => {
  const { id, productId } = req.params;
  res.json({
    name: `Producto ${productId} de la categoria ${id}`,
    price: 1000,
  });
});

router.post(
  '/',
  validatorHandler(createCategorySchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newCategory = await services.createCategories(body);
    res.status(201).json(newCategory);
  },
);

router.patch(
  '/:id',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await services.updateCategoriesById(id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  },
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await services.deleteCategoryById(id);
  res.json(rta);
});

module.exports = router;
