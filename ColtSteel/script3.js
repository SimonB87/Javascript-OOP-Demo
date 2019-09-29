//RULE 2 - if "this" is inside an declared object, its value is the closest parent object
var person = {
  firstName: "El",
  sayHi: function(){
    return "Hi " + this.firstName
  },
  determineContext: function(){
    return this === person;
  },
  dog: {
    sayHello: function(){
      return "Hi " + this.firstName
    },
    determineContext: function(){
      return this === person;
    }
  }
}

person.sayHi(); // "Hi El"

person.dog.sayHello(); //"Hi undefined"

// person.dog.determineContext(); //false - this is not a person, 
