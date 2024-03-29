const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

const categoryNames = ['Fruits', 'Vegetables', 'Meat', 'Fish', 'Dairy'];

class CateroriesService {
  constructor() {
    this.categories = [];
    this.addCategories();
  }

  addCategories() {
    const limit = 5;

    for (let i = 0; i < limit; i++) {
      this.categories.push({
        id: faker.string.uuid(),
        name: categoryNames[i],
      });
    }
  }

  async createCategories(data) {
    const newCategory = {
      id: faker.string.uuid(),
      ...data,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  async getCategories() {
    return new Promise((resolve) => {
        resolve(this.categories);
    });
  }

  async getCategoriesById(id) {
    const category = this.categories.find((category) => category.id === id);
    if (!category) {
      throw boom.notFound('Category not found');
    }
    return category;
  }

  async updateCategoriesById(id, changes) {
    const index = this.categories.findIndex((category) => category.id === id);

    if (index === -1) {
      throw boom.notFound('Category not found');
    } else {
      const category = this.categories[index];
      this.categories[index] = {
        ...category,
        ...changes,
      };
      return this.categories[index];
    }
  }

  async deleteCategoryById(id) {
    const index = this.categories.findIndex((category) => caterogy.id === id);
    if (index === -1) {
      throw boom.notFound('Category not found');
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = CateroriesService;
