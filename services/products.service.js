const { faker } = require('@faker-js/faker');

class ProductsService {
  constructor() {
    this.products = [];
    this.addProduct();
  }

  async addProduct(product) {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
    this.products.push(product);
  }

  async createProduct(product) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...product,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async getProducts() {
    return this.products;
  }

  async getProductById(id) {
    return this.products.find((product) => product.id === id);
  }

  async updateProductById(id, changes) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }

  async deleteProductById(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }
}
module.exports = ProductsService;
