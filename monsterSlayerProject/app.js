const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      specialAttackAllowed: 0,
      winner: null,
      battleLog: [],
    };
  },
  computed: {
    monsterBar() {
      return {
        width: this.monsterHealth > 0 ? this.monsterHealth + '%' : '0%',
      };
    },
    playerBar() {
      return { width: this.playerHealth > 0 ? this.playerHealth + '%' : '0%' };
    },
    isDisabled() {
      return this.specialAttackAllowed < 5;
    },
    gameOver() {
      return this.winner !== null
    }
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'monster';
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'player';
      }
    },
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
      this.specialAttackAllowed++;
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
    specialAttack() {
      let attackValue = this.getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.battleLog.push(
        `You have attacked with a special attack value of: ${attackValue}`
      );
      this.attackPlayer();
      this.specialAttackAllowed = 0;
    },
    heal() {
      const healValue = this.getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
        let randomAttack = this.getRandomValue(1, 4);
        if (randomAttack <= 2) {
          this.specialAttackAllowed++;
          this.battleLog.push(
            'Oh no! Monster attacked you while you were healing yourself.'
          );
          this.attackPlayer();
        }
      }
    },
    tryAgain() {
      this.monsterHealth = 100,
      this.playerHealth = 100,
      this.specialAttackAllowed = 0,
      this.winner = null,
      this.battleLog = []
    },
    surrender() {
      this.winner = 'monster'
    }
  },
});

app.mount('#game');
