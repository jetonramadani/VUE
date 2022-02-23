<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" v-model="data.name" required />
    </div>
    <div>
      <label for="phone">Phone</label>
      <input type="tel" id="phone" name="phone" v-model="data.phone" required />
    </div>
    <div>
      <label for="email">E-mail</label>
      <input type="email" id="email" name="email" v-model="data.email" required />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>
<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      data: {},
    };
  },
  methods: {
    submitData() {
      this.$emit("add-contact", { ...this.data, isFavorite: false, id: new Date().toISOString() });
      this.data = {};
    },
  },
};
</script>
<style></style>
