//RULE 3 - choose, what we want to context of the "this" to be using call, apply or bind
//The methods call, apply or bind CAN only be used in FUNCTIONS.


//Call method - sets, what the "this" is related to
//Call method - PARAMETERS:  thisArg, a, b, c, d, ...
//Call method - INVOKE IMMEDIATELY?: Yes

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
      return "Hi " + this.firstName;
    },
    determineContext: function(){
      return this === person;
    }
  }
}
//lets make "this" to be "person"
person.dog.sayHello.call(person);//"Hi El"

var colt = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi " + this.firstName;
  }
}

var ellie = {
  firstName: "Ellie",
}

colt.sayHi(); // returns: "Hi Colt"
colt.sayHi.call(ellie); //returns: "Hi Ellie"
