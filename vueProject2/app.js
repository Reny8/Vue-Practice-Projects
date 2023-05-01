const app = Vue.createApp({
  data() {
    return {
      goalA: 'Finish the course and learn Vue!',
      goalB: 'Master Vue and build amazing apps!',
      link: 'https://vuejs.org',
      counter: 0,
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.goalA;
      }
      return this.goalB;
    },
  },
  removeClick() {
    if (this.counter) {
      return (this.counter -= 1);
    }
  },
  addClick() {
    return (this.counter += 1);
  },
});

app.mount('#user-events');
