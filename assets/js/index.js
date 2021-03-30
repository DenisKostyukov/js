'use strict';

const PROTOCOL = 'http://';
const SERVER_IP = 'localhost';
const PORT = 3000;
function createQuery(absPath='/home'){
  const url=`${PROTOCOL}${SERVER_IP}:${PORT}${absPath}`;
  return url;
}
console.log(createQuery("/index.html"));
