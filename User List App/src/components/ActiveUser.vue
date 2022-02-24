<template>
  <section>
    <h2>{{ userName }}</h2>
    <h2>{{ userAge }} Years</h2>
  </section>
</template>

<script>
export default {
  props: ["userName", "userAge"],
};
</script>
<style></style>
