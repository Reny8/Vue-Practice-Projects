const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
      link: 'https://vuejs.org',
    };
  },
});

app.mount('#user-goal');
