/* eslint-disable no-underscore-dangle */
// ./src/store/getters
const productGetters = {
  // All products
  allProducts: state => state.products,
  // Get Product by ID
  productById: (state, getters) => (id) => {
    if (getters.allProducts.length > 0) {
      return getters.allProducts.filter(p => p._id === id)[0];
    }
    return state.product;
  },
};

export { productGetters as default };
