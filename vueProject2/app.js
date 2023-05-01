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
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
  },
});

app.mount('#user-events');
