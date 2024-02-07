const products = [];

function addProduct(product) {
  products.push(product);
}

function removeProduct(productName) {
  products = products.filter(product => product.productName !== productName);
}

function updateProduct(productName, updatedProduct) {
  const productIndex = products.findIndex(product => product.productName === productName);
  if (productIndex !== -1) {
    products[productIndex] = updatedProduct;
  }
}

function getProducts() {
  return products;
}

module.exports = {
  addProduct,
  removeProduct,
  updateProduct,
  getProducts
};