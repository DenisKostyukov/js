'use strict';
const vocablurary = new Map();
vocablurary.set("cat", "кот");
vocablurary.set("dog", "собака");
vocablurary.set("table", "стол");
vocablurary.set("screen", "экран");
vocablurary.set("structure", "структура");
vocablurary.set("count", "считать");
vocablurary.set("set", "установить");
vocablurary.set("queue", "очередь");
vocablurary.set("kernel", "ядро");

const input = 'cat count dog set queue kernel to the table';
const translate = (str) => {
  return str.toLowerCase().split(' ').map((word) => {
    return vocablurary.has(word) ? vocablurary.get(word) : word;
  }).join(' ');
}
const user1 = {
  id: 1,
  name: 'John',
  age: 18,
}
const user2 = {
  id: 2,
  name: 'Jane',
  age: 20,
}
const u1msg = ["1234", "4342", "sgsg"];
const u2msg = ["ssgsg", "sfghfd", "fgkjgk"];
const msg = new Map();
msg.set(user1.id, u1msg);
msg.set(user2.id, u2msg);
const getUserMsgs = (user) => msg.get(user.id);