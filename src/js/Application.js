import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;

    const emojisDiv = document.querySelector('#emojis');
    const p = document.createElement('p').textContent = this.emojis;

    emojisDiv.innerHTML = '';
    emojisDiv.append(p);
  }

  addBananas(array) {
    this.emojis = this.emojis.map((monkey) => {
      monkey += this.banana

      return monkey
    })

    this.setEmojis(this.emojis)
  }
}
