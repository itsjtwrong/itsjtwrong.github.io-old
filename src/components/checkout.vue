<template>
  <div>
    <vue-stripe-checkout
      ref="checkoutRef"
      :name="name"
      :description="description"
      :currency="currency"
      :amount="setPrice()"
      :allow-remember-me="true"
      :shipping-address="true"
      :billing-address="true"
      :zip-code='true'
      @done="done"
      @opened="opened"
      @closed="closed"
    ></vue-stripe-checkout>
    <div class="checkout" @click="checkout">Checkout | Total ${{setPrice()/100}} (ships to US)</div>
  </div>
</template>
 
<script>
import Vue from 'vue';
import VueStripeCheckout from 'vue-stripe-checkout';
import axios from 'axios';
 
Vue.use(VueStripeCheckout, 'pk_live_BHZWoiVI8O9qB7V4coGlN6zV');

export default {
    name: 'checkout',
  data() {
    return {
      name: 'WRONG DESIGN APPAREL',
      description: '',
      currency: 'USD',
      cartItems: this.$store.state.cart, 
    }
  },
  methods: {
    async checkout () {
      // token - is the token object
      // args - is an object containing the billing and shipping address if enabled
      const { token, args } = await this.$refs.checkoutRef.open();
    },
    done ({token, args}) {
      axios.post('http://dry-temple-94195.herokuapp.com/customers', {
        body: args,
      })
      axios.post('http://dry-temple-94195.herokuapp.com/api/stripe', {
          stripeToken: token.id,
          price: this.setPrice()
      })

    },
    opened () {
    },
    closed () {
      // do stuff 
    },
    setPrice() {
      console.log("here");
      let price = 0;
      this._data.cartItems.forEach(element => {
        price += parseInt(element.price);
      });
      return price * 100;
    },
  },
  computed: {
    
  }
}
</script>
<style>
.checkout{
  background: black;
  color: white;
  padding: 10px;
  display: inline-block;
  outline:inherit;
  margin: 10px 0 0 0;
}

.checkout:hover {
  background: white;
  color: black;
  padding: 9px;
  border: 1px solid black;
}
</style>