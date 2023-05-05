const app = Vue.createApp({
  data() {
    return {
      friends: [],
      counter: 0,
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
      this.friends.push({
        id: this.counter++,
        name: name,
        phone: phone,
        email: email,
        visible: true,
      });
    },
    toggleDetails(id) {
      this.friends
        .filter((item) => item.id === id)
        .map((item) => (item.visible = !item.visible));
    },
  },
}).mount('#app');

app.addFriends();
