//Strict mode in ES5
"use strict"

function whatIsThis(){
  return this;
}

whatIsThis(); //Uncaught TypeError: Cannot set property 'person' of undefined at whatIsInThis

function whatIsInThis(){
  this.person = "Patrik";//Uncaught TypeError: Cannot set property 'person' of undefined at whatIsInThis
}
whatIsInThis();//code will not run in funtion error

console.log(person);//code will not run in funtion error
