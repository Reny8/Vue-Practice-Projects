const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      battleLog: [],
    };
  },
  methods: {
    getRandomValue(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    attackMonster() {
      let attackValue = this.getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.battleLog.push(
        `You have attacked the monster with a strength of ${attackValue}`
      );
      this.attackPlayer();
    },
    attackPlayer() {
      if (this.monsterHealth >= 0 && this.playerHealth >= 0) {
        let attackValue = this.getRandomValue(8, 12);
        this.playerHealth -= attackValue;
        this.battleLog.push(
          `Monster has attacked you with a strength of ${attackValue}`
        );
      }
    },
    heal() {
      if (
        this.playerHealth <= 90 &&
        this.playerHealth > 0 &&
        this.monsterHealth > 0
      ) {
        this.playerHealth += 10;
        let randomAttack = this.getRandomValue(1, 5);
        if (randomAttack === 1) {
          this.battleLog.push(
            'Oh no! Monster attacked you while you were healing yourself.'
          );
          this.attackPlayer();
        }
        if (this.playerHealth < 100) {
          this.battleLog.push(
            `You have healed yourself to: ${this.playerHealth}`
          );
        }
      } else if (
        this.playerHealth > 90 &&
        this.playerHealth <= 99 &&
        this.playerHealth > 0 &&
        this.monsterHealth > 0
      ) {
        this.playerHealth = 100;
        this.battleLog.push(
          `You have healed yourself to: ${this.playerHealth}`
        );
      }
    },
  },
});

app.mount('#game');
