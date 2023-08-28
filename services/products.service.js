const { faker } = require('@faker-js/faker');

class ProductsService {
  constructor() {
    this.products = [];
    this.addProduct();
  }

  addProduct(product) {
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
    return this.products;
  }

  getProductById(id) {
    return this.products.find((product) => product.id === id);
  }

  updateProductById(id, product) {
    const index = this.products.findIndex((product) => product.id === id);
    this.products[index] = product;
  }

  deleteProductById(id) {
    this.products = this.products.filter((product) => product.id !== id);
  }
}
module.exports = ProductsService;
