const Product = require('../../domain/product/productEntity');

class ProductDb {
  constructor({ db }) {
    this.db = db;
  }

  async getById(productId) {
    const product = await this.db.query('SELECT * FROM products WHERE id = ?', [productId]);
    return product ? new Product(product) : null;
  }

  async create(product) {
    await this.db.query('INSERT INTO products (id, name, email) VALUES (?, ?, ?)', [product.id, product.name, product.email]);
  }

  // other repository methods
}

module.exports = ProductDb;

