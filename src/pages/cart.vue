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
  <form v-if="showForm" action="" class='checkoutForm'>
    Full Name * <br><input required placeholder="First" type="text" name="firstname"><br>
    <input required placeholder="Last" type="text" name="lastname"><br>
    Email: *<input required v-validate="'required|email'" type="email" name="email" id=""><br>
    Phone: <input type="tel" name="phone" id=""><br>
    Street Address: *<input required type="text" name="street" id=""><br>
    Street Address Line 2: <input type="text" name="line2" id=""><br>
    City: *<input required type="text" name="city" id=""><br>
    State: *<select>
	<option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	<option value="AZ">Arizona</option>
	<option value="AR">Arkansas</option>
	<option value="CA">California</option>
	<option value="CO">Colorado</option>
	<option value="CT">Connecticut</option>
	<option value="DE">Delaware</option>
	<option value="DC">District Of Columbia</option>
	<option value="FL">Florida</option>
	<option value="GA">Georgia</option>
	<option value="HI">Hawaii</option>
	<option value="ID">Idaho</option>
	<option value="IL">Illinois</option>
	<option value="IN">Indiana</option>
	<option value="IA">Iowa</option>
	<option value="KS">Kansas</option>
	<option value="KY">Kentucky</option>
	<option value="LA">Louisiana</option>
	<option value="ME">Maine</option>
	<option value="MD">Maryland</option>
	<option value="MA">Massachusetts</option>
	<option value="MI">Michigan</option>
	<option value="MN">Minnesota</option>
	<option value="MS">Mississippi</option>
	<option value="MO">Missouri</option>
	<option value="MT">Montana</option>
	<option value="NE">Nebraska</option>
	<option value="NV">Nevada</option>
	<option value="NH">New Hampshire</option>
	<option value="NJ">New Jersey</option>
	<option value="NM">New Mexico</option>
	<option value="NY">New York</option>
	<option value="NC">North Carolina</option>
	<option value="ND">North Dakota</option>
	<option value="OH">Ohio</option>
	<option value="OK">Oklahoma</option>
	<option value="OR">Oregon</option>
	<option value="PA">Pennsylvania</option>
	<option value="RI">Rhode Island</option>
	<option value="SC">South Carolina</option>
	<option value="SD">South Dakota</option>
	<option value="TN">Tennessee</option>
	<option value="TX">Texas</option>
	<option value="UT">Utah</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
</select>				
		<br>
    Zip Code: *<input required type="text" name="zip" id=""><br>
    <button type="submit">Next</button>
    (* = required)
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

  input, button {
    border: 1px solid #111;
    margin:2px;
  }

  .cart {
    margin: 10px;
  }

  .checkoutForm {
    border: 1px solid black;
    padding:10px;
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
