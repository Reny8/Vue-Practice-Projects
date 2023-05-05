const app = Vue.createApp({
  data() {
    return {
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.$refs.inputValue.value);
      this.$refs.inputValue.value = '';
    },
    deleteGoal(item) {
      let newArray = this.goals.filter((goal) => goal !== item);
      this.goals = newArray;
    },
  },
});

app.mount('#goals');
