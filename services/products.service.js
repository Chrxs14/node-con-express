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

  getProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
        reject(new Error('Error'));
      }, 5000);
    });
    // return this.products;
  }

  async getProductById(id) {
    return this.products.find((product) => product.id === id);
  }

  async updateProductById(id, product) {
    const index = this.products.findIndex((product) => product.id === id);
    this.products[index] = product;
  }

  async deleteProductById(id) {
    this.products = this.products.filter((product) => product.id !== id);
  }
}

module.exports = ProductsService;
