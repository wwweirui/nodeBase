// import { EventEmitter } from "node:events";

// const emitter = new EventEmitter();

// // 监听
// // emitter.on("say", (msg) => console.log(msg));
// // 注册（实现）
// // emitter.emit("say", "你好");

// emitter.once("once", () => console.log("只一次"));
// emitter.emit("once"); // 输出
// emitter.emit("once"); // 无输出

// ok 事件监听如何处触发： 用对象存事件 -> 数据存监听 -> emit时遍历执行

class SimpleEE {
  constructor() {
    this.events = Object.create(null);
  }

  // 监听事件 用对象存事件
  on(event, fn) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(fn);
  }

  // 触发事件 实现
  emit(event, ...args) {
    if (!this.events[event]) {
      return false;
    }
    // 取出存入的fn
    const fns = this.events[event];
    fns.forEach((fn) => fn.apply(this, args));
    return true;
  }

  // once
  once(event, fn) {
    const wrap = (...args) => {
      this.off(event, wrap);
      fn.apply(this, args);
    };
    // 封装触发一次
    this.on(event, wrap);
  }

  off(event, fn) {
    const fns = this.events[event];
    if (!fns) return false;
    // 过滤出不是fn的
    // 重新赋值给this.events[event]
    this.events[event] = fns.filter((item) => item !== fn);
  }
}

const emitSelf = new SimpleEE();
emitSelf.on("say", (msg) => console.log(msg));

emitSelf.emit("say", "你好xxxx");

emitSelf.once("qq", () => console.log("只一次"));
emitSelf.emit("qq"); // 输出
emitSelf.emit("qq"); // 无输出
