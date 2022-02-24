<template>
  <section>
    <form @submit.prevent="submitData">
      <input type="text" placeholder="Your name" v-model="userName" />
      <input type="text" placeholder="Your Age" v-model="userAge" />
      <input type="submit" value="SUBMIT" />
    </form>
  </section>
</template>
<script>
export default {
  emit: ["on-submit"],
  data() {
    return {
      userName: "",
      userAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("on-submit", this.userName, this.userAge);
    },
  },
};
</script>
