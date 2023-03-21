class GetProductById {
  constructor({ productService }) {
    this.productService = productService;
  }

  async execute(productId) {
    return this.productService.getProductById(productId);
  }
}

class CreateProduct {
  constructor({ productService }) {
    this.productService = productService;
  }

  async execute(productData) {
    return this.productService.createProduct(productData);
  }
}

module.exports = { GetProductById, CreateProduct };
