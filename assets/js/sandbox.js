'use strict';

const capitalize = (string) => {
  const words = string.split(' ');
  for (let i = 0; i < words.length; i++) {
    const letters = words[i].split('');
    letters[0] = letters[0].toUpperCase();
    words[i] = letters.join('');
  }
  return words.join(' ');
}