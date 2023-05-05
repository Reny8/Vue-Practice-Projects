const app = Vue.createApp({
  data() {
    return {
      friends: [],
    };
  },
  methods: {
    addFriends() {
      this.addToList('Manuel Lorenz', '267 867 5309', 'manuel@localhost.com');
      this.addToList(
        'Julie Jones',
        '267 456 7890',
        'julie.jones@localhost.com'
      );
    },
    addToList(name, phone, email) {
      this.friends.push({ name: name, phone: phone, email: email });
    },
  },
}).mount('#app');

app.addFriends()