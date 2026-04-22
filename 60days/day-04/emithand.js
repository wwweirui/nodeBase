class selfEmit {
  constructor() {
    this.events = Object.create(null);
  }

  on(event, fn) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(fn);
  }

  emmit(event, ...args) {
    if (!this.events[event]) return false;
    const fns = this.events[event];
    fns.forEach((fn) => fn.apply(this, args));
    return true;
  }

  once(event, fn) {
    const wrap = (...args) => {
      this.off(event, fn);
      fn.apply(this, args);
    };
    this.on(event, wrap);
  }

  off(event, fn) {
    const fns = this.events[event];
    if (!fns) return false;
    this.events[event] = fns.filters((f) => f !== fn);
  }
}
