'use strict';
const num = [1, 2, 3, 4, 5, 6,7, 8, 9,10,234]
const linearSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}
const binarySearch = (min=0, max=100) => {
  let start = min;
  let end = max;
  let middle = Math.round((start + end) / 2);
  let accept = confirm(`${middle} это ваше число?`);
  while (true) {
    if (accept) {
      return middle;
    }
    if(confirm(`${middle} больше чем ваше число  ?`)){
      end = middle;
      middle= Math.floor((start + end) / 2);
    }
    else{
      start = middle;
      middle= Math.ceil((start + end) / 2);
    }
    accept = confirm(`${middle} это ваше число?`);
  }
}
const createMultiplicationTable = (limit) => {
  const table =[];
  for(let i =1; i<=limit; i++){
    for(let j=1;j<=limit;j++){
      table.push(`${i} * ${j} = ${i*j}`);
    }
  }
  return table;
}