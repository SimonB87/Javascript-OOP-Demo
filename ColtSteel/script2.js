//Strict mode in ES5.
//by this keyword this in the function whatIsInThis() is not defined.
//...this help me not to declare a global variable by accident. 
"use strict"


function whatIsThis(){
  return this;
}

whatIsThis(); //Uncaught TypeError: Cannot set property 'person' of undefined at whatIsInThis

function whatIsInThis(){
  this.person = "Patrik";//Uncaught TypeError: Cannot set property 'person' of undefined at whatIsInThis
}
whatIsInThis();//code will not run in function error

console.log(person);//code will not run in function error
