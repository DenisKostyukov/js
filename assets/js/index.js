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
const translate=(str)=>{
  const lower= str.toLowerCase();
  const splittedArr= lower.split(' ');
  const translate= splittedArr.map((word)=>{
    if(vocablurary.has(word)){
     return vocablurary.get(word);
    }
    return word;
  })
  const trStr= translate.join(' ');
  return trStr;
}