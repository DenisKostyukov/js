'use strict';

const sum1 =(...args) =>{
 return args.reduce((accumulator, currentValue)=>{
   if(!Number.isFinite(currentValue)){
     throw new TypeError('Wrong argument type')
   }
    return accumulator + currentValue;
  }, 0);
};