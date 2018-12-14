<template>
  <div class="cart">
    <h1 v-if="cartItems.length > 0">Items in cart</h1>
    <div class="items" v-if="cartItems.length > 0">
      <div v-for="item in cartItems" :key="item.id">
        <h2>{{item.name}} | ${{item.price}}</h2>
      </div>
    </div>
    <checkout v-if="cartItems.length > 0"/>
    <h2 v-else>No items in cart</h2>
  </div>
</template>

<script>

import checkout from '@/components/checkout';
import Vue from 'vue';
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

export default {
  name: "cart",
  components: {
    checkout,
  },
  data() {
    return {
      user: {
        first: '',
        last: '',
        email: '',
        phone: '',
        addrs: '',
        addrsl2: '',
        city: '',
        state: '',
        zip:  '',
      },
      cartItems: this.$store.state.cart,
      showForm: false,
    }
  },
  methods: {
    addPrice() {
      let price = 0;
      this._data.cartItems.forEach(element => {
        price += parseInt(element.price);
      });
      return price;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input,
button {
  border: 1px solid #111;
  margin: 2px;
}

.cart {
  margin: 10px;
}

.items {
  border: 1px solid black;
  padding: 10px;
}
</style>
