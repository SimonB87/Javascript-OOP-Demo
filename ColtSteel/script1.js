console.log(this); //Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}

function whatIsThis(){
  return this;
}

whatIsThis(); // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}


function whatIsThis(){
  // all the glbal variables get attached to the window object
  //inside the function key word "this" without reference would represent the window object
  this.person = "Patrik"; //this is how i created the global variable
}

console.log(person);//Patrik
