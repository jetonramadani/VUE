<template>
  <div>
    <active-user :user-name="user.name" :user-age="user.age"></active-user>
    <user-data @on-submit="setUserData"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Max",
        age: 34,
      },
    };
  },
  methods: {
    setUserData(name, age) {
      this.user.name = name;
      this.user.age = age;
    },
  },
};
</script>
<style>
html {
  font-family: sans-serif;
}
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>
