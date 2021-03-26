'use strict';

const number=+prompt("Input number")
let counter=1;
let result=1;
while(counter<=number){
  result*=counter;
  counter++;
}
alert(result);