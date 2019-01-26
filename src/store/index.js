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
    posts: [{'id':'0', 'name': 'ZERO', 'content': `Sometimes I can't tell if my efforts are reasonable but I think they are. I think I love her I think there's too much to do to be sad but its a string thing “to not be sad”. Is that possible? I think life is better when one is happy but It doesn't seem like it should be that easy. I think I’m  maker and that's a good thing. Tristans a maker. I think this world is chicken.\n
    PRIORITIES
    -Make things
    --For you
    --For others
    --For her
    -See things
    -Be in a moment\n
    I dont think Im a taker. I mean, I think I need to put out and what's bad about that. Just do it for those close. I think an issue of being intoxicated is that in a moment everything is simple, you'll never have to be out of this position. That's just not the truth, life will continue, there is more to do.
    
    How hard is it to try and think of a purpose?
    
    One (1) while president
    Many (∞) dark lies

    I’m scared that I screwed up to much this time. Wish me luck strange blog of mine, I will never give up at these plans.

    My boy abstract

    Screen readers can be set to only read Hn tags, so use them accordingly. 
    `}],
  },
  // GETTERS
  getters: Object.assign({}, productGetters),
  mutations: Object.assign({}, productMutations, cartMutations, userMutations),
  actions: Object.assign({}, productActions),
});
