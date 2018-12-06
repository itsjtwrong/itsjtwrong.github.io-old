<template>
  <div class="productform">
    <form @submit.prevent="saveProduct">
    <div class="newForm">
      <label for="name">Name: </label><input
        type="text"
        placeholder="Name"
        v-model="piece.name"
        v-validate="'required'"
        name="name"
        :class="{'form-control': true, 'error': errors.has('name') }"
      >
      <label>Price</label>
        <input
          type="number"
          class="form-control"
          placeholder="Price"
          v-model="piece.price"
          v-validate="'required'"
          name="price"
          :class="{'form-control': true, 'error': errors.has('price') }" />
             <label>Image</label>
        <input
          type="text"
          lass="form-control"
          placeholder="Image"
          v-model="piece.image"
          v-validate="'required|url'"
          name="image"
          :class="{'form-control': true, 'error': errors.has('image') }" />
          <label>Description</label>
        <textarea
          type="number"
          class="form-control"
          placeholder="Description"
          rows="5"
          v-model="piece.description"
          v-validate="'required'"
          name="description"
          :class="{'form-control': true, 'error': errors.has('description') }"></textarea>
        <button class="button">
          <span v-if="isEditing">Update Product</span>
          <span v-else>Add Product</span>
        </button>
    </div>
    </form>
  </div>
</template>

<script>
export default {
  name: '',
  props: ['piece', 'isEditing'],
  methods: {
    saveProduct () {
        this.$validator.validateAll().then((result) => {
            if(result) {
                this.$emit('save-product', this.piece);
            } else {
                alert('fix the errors');
            }
        });
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-control.error {
  color: #999;
  transition: 0.28s;
  overflow: hidden;
  color: red;
}
</style>

