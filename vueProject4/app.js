const app = Vue.createApp({
  data() {
    return {
      content: 'No goals have been added yet. Please start adding some!',
      goals: [],
      inputValue: '',
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.inputValue);
      this.inputValue = ''
    },
  },
});

app.mount('#goals');
