<template>
  <div class="cart">
    <h1 v-if="cartItems.length > 0">Items in cart</h1>
    <div class="items" v-if="cartItems.length > 0">
      <div v-for="item in cartItems" :key='item.id'>
    <h2>{{item.name}} | ${{item.price}}</h2>
  </div> 
    </div>
  <h2 v-if="cartItems.length > 0" class="checkout" @click="showForm = true">Checkout | Total ${{addPrice()}} (ships to US)</h2>
  <h2 v-else>No items in cart</h2>
  <form v-if="showForm" action="">
    First Name: <input type="text" name="firstname"><br>
    Last Name: <input type="text" name="lastname"><br>
    Email: <input type="email" name="email" id=""><br>
    Phone: <input type="tel" name="phone" id=""><br>
    Street Address: <input type="text" name="street" id=""><br>
    Street Address Line 2: <input type="text" name="line2" id=""><br>
    City: <input type="text" name="city" id=""><br>
    State: <input type="text" name="state" id=""><br>
    Zip Code: <input type="text" name="zip" id=""><br>
  </form>
  </div>
</template>

<script>

export default {
  name: 'cart',
  methods: {
    addPrice() {
      let price = 0;
      this._data.cartItems.forEach(element => {
        price += parseInt(element.price)
      });
      return price;
    },
  },
  data() {
    return {
      cartItems: this.$store.state.cart,
      showForm: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cart {
    margin: 10px;
  }
  .checkout {
    background:black;
    color:white;
    padding: 10px;
    display: inline-block;
  }

  .checkout:hover {
    background:white;
    color:black;
    padding: 9px;
    border:1px solid black;
  }
  .items {
    border: 1px solid black;
    padding: 10px;
  }
</style>
