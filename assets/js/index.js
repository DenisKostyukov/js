'use strict';

const number=+prompt("Input number");
const power=+prompt("Input power");
let counter=1;
let result=1;
while(counter<=power){
  result*=number;
  counter++;
}
console.log(result);