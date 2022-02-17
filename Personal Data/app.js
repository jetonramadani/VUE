const app = Vue.createApp({
  data() {
    return {
      name: "Jeton Ramadani",
      number: Math.random(),
      age: 21,
      imgUrl: "https://avatars.githubusercontent.com/u/69119243?v=4",
    };
  },
});

app.mount("#assignment");
