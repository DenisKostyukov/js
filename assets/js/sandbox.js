'use strict';

const str = "some string I need";
const words = str.split(' ');
let newString ;
for (let i = 0; i < words.length; i++) {
  const letters = words[i].split('');
  letters[0] = letters[0].toUpperCase();
  words[i]=letters.join('');
}
newString=words.join(' ');
console.log(newString)