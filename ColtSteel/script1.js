//RULE 1 - outside of a declared object, "this" means the global (window) object
console.log(this); //Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}

function whatIsThis(){
  return this;
}

whatIsThis(); // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}


function whatIsThis(){
  // if there is a variable declared in a function, it is set as a global variable, if it is in a object, it is set to an objct
  // all the global variables get attached to the window object
  // inside the function key word "this" without reference would represent the window object
  this.person = "Patrik"; //this is how i created the global variable
}

console.log(person);//Patrik
