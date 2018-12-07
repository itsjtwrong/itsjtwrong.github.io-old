import Vue from 'vue';
import Vuex from 'vuex';
import productGetters from './getters';
import { productMutations, cartMutations } from './mutations';
import productActions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    // bought items
    cart: [],
    // ajax loader
    showLoader: false,
    // selected product
    product: {},
    // all products
    products: [],
  },
  // GETTERS
  getters: Object.assign({}, productGetters),
  mutations: Object.assign({}, productMutations, cartMutations),
  actions: Object.assign({}, productActions),
});
