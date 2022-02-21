const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      log: [],
    };
  },
  computed: {
    monsterBarStyle() {
      return { width: this.monsterHealth < 0 ? 0 : this.monsterHealth + "%" };
    },
    playerBarStyle() {
      return { width: this.playerHealth < 0 ? 0 : this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth: function (value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth: function (value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  methods: {
    attackMonster() {
      const dmg = getRandomInt(5, 12);
      this.currentRound++;
      this.monsterHealth -= dmg;
      this.addLogMessage("player", "attack", dmg);
      this.attackPlayer();
    },
    attackPlayer() {
      const dmg = getRandomInt(8, 15);
      this.addLogMessage("monster", "attack", dmg);
      this.playerHealth -= dmg;
    },
    specialAttackMonser() {
      const dmg = getRandomInt(10, 25);
      this.addLogMessage("player", "attack", dmg);
      this.currentRound++;
      this.monsterHealth -= dmg;
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomInt(8, 20);
      this.addLogMessage("player", "heal", healValue);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
    newGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.log = [];
    },
    addLogMessage(who, what, value) {
      this.log.unshift({
        who: who,
        what: what,
        value: value,
      });
    },
  },
});

app.mount("#game");
