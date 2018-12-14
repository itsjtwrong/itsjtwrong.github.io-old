import Vue from 'vue';
import Vuex from 'vuex';
import productGetters from './getters';
import { productMutations, cartMutations, userMutations } from './mutations';
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
    users: [],
  },
  // GETTERS
  getters: Object.assign({}, productGetters),
  mutations: Object.assign({}, productMutations, cartMutations, userMutations),
  actions: Object.assign({}, productActions),
});
