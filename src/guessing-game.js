class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.value = null;
    }

    setRange = (min, max) => {
        this.min = min;
        this.max = max;
        this.value = Math.round(this.min + (this.max - this.min) / 2);
    }

    guess = () => {
      return this.value;
    }

    lower = () => {
      this.setRange(this.min, this.value);
    }

    greater = () => {
      this.setRange(this.value, this.max);
    }
}
       

module.exports = GuessingGame;
