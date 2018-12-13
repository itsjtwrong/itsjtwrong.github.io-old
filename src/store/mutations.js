/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ADD_USER,
} from './mutation-types';

const productMutations = {
  [ALL_PRODUCTS](state) {
    state.showLoader = true;
  },
  [ALL_PRODUCTS_SUCCESS](state, payload) {
    state.showLoader = false;
    state.products = payload;
  },
  [PRODUCT_BY_ID](state) {
    state.showLoader = true;
  },
  [PRODUCT_BY_ID_SUCCESS](state, payload) {
    state.showLoader = false;
    state.product = payload;
  },
  [ADD_PRODUCT]: (state) => {
    state.showLoader = true;
  },
  [ADD_PRODUCT_SUCCESS]: (state, payload) => {
    state.showLoader = false;
    state.products.push(payload);
  },
  [UPDATE_PRODUCT]: (state) => {
    state.showLoader = true;
  },
  [UPDATE_PRODUCT_SUCCESS]: (state, payload) => {
    state.showLoader = false;
    state.products = state.products.map((p) => {
      if (p._id === payload._id) {
        const payloadNew = { ...payload };
        return payloadNew;
      }
      return p;
    });
  },
  [REMOVE_PRODUCT]: (state) => {
    state.showLoader = true;
  },
  [REMOVE_PRODUCT_SUCCESS]: (state, payload) => {
    state.showLoader = false;
    const index = state.products.findIndex(p => p._id === payload);
    console.debug('index', index);
    state.products.splice(index, 1);
  },
};

const cartMutations = {
  [ADD_TO_CART]: (state, payload) => state.cart.push(payload),
  [REMOVE_FROM_CART]: (state, payload) => {
    const index = state.cart.findIndex(p => p._id === payload);
    state.cart.splice(index, 1);
    console.log(state.cart, state.cart.length, index);
  },
};

const userMutations = {
  [ADD_USER]: (state, payload) => state.users.push(payload)
};

export { productMutations, cartMutations, userMutations };
