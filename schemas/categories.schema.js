const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(50);
const products = Joi.array().items(Joi.string());

const createCategorySchema = Joi.object({
  name: name.required(),
  products: products,
});

const updateCategorySchema = Joi.object({
  name: name,
  products: products,
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createCategorySchema,
  updateCategorySchema,
  getCategorySchema,
};
