const Product = require('../../domain/product/productEntity');

class ProductHttp {
  constructor({ http }) {
    this.http = http;
  }

  async getById(productId) {
    const response = await this.http.get(`/products/${productId}`);
    return response.data ? new Product(response.data) : null;
  }

  async create(product) {
    await this.http.post('/products', product);
  }

  // other repository methods
}

module.exports = ProductHttp;
