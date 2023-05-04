const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      specialAttackAllowed: 0,
      battleLog: [],
    };
  },
  computed: {
    monsterBar() {
      return { width: this.monsterHealth > 0 ? this.monsterHealth + '%' : '0%' };
    },
    playerBar() {
      return { width: this.playerHealth > 0 ? this.playerHealth + '%' : '0%' };
    },
    isDisabled() {
      return this.specialAttackAllowed < 5
    },
    youLost() {
      return this.monsterHealth > this.playerHealth
    },
    displayBattleLog() {
      return this.monsterHealth > 0 && this.playerHealth > 0
    }
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
      this.specialAttackAllowed += 1
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
      let attackValue = this.getRandomValue(10,25)
      this.monsterHealth -= attackValue
      this.battleLog.push(`You have attacked with a special attack value of: ${attackValue}`)
      this.attackPlayer()
      this.specialAttackAllowed = 0

    },
    heal() {
      if (
        this.playerHealth <= 90 &&
        this.playerHealth > 0 &&
        this.monsterHealth > 0
      ) {
        this.playerHealth += 10;
        let randomAttack = this.getRandomValue(1, 4);
        if (randomAttack <=2 ) {
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
