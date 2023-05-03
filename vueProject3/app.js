const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    boxSelected(box) {
      if (box === 'A') {
        if (this.boxASelected) {
          this.boxASelected = false;
        } else {
          this.boxASelected = true;
        }
      } else if (box === 'B') {
        if (this.boxBSelected) {
          this.boxBSelected = false;
        } else {
          this.boxBSelected = true;
        }
      } else if (box === 'C') {
        if (this.boxCSelected) {
          this.boxCSelected = false;
        } else {
          this.boxCSelected = true;
        }
      }
    },
  },
});

app.mount('#styling');
