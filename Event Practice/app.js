const app = Vue.createApp({
  data() {
    return { keydownInput: "", enterInput: "" };
  },
  methods: {
    showAlert(text) {
      alert(text);
    },
  },
});

app.mount("#assignment");
