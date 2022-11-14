class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    setInterval(() => {
      this.currentTime += 1;
      this.intervalId = this.currentTime;
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    if (this.currentTime === 0) {
      return 0;
    } else {
      return Math.floor(this.currentTime / 60);
    }
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    } else {
      return this.currentTime % 60;
    }
  }

  computeTwoDigitNumber(value) {
    let stringifiedValue = value.toString();
    if (stringifiedValue.length < 2) {
      return "0" + stringifiedValue;
    }
    if (stringifiedValue.length >= 2) {
      return stringifiedValue;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes
    )}:${this.computeTwoDigitNumber(this.getSeconds)}`;
  }
}
