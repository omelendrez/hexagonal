class ProductService {
  constructor({ productRepository }) {
    this.productRepository = productRepository;
  }

  async getProductById(productId) {
    const product = await this.productRepository.getById(productId);
    if (!product) {
      throw new ProductNotFoundError(productId);
    }
    return product;
  }

  async createProduct(productData) {
    const product = new Product(productData);
    await this.productRepository.create(product);
    return product;
  }

  // other service methods
}

module.exports = { ProductService };
