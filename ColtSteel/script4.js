//call method - sets, what the "this" is related to
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

var elie = {
  firstName: "Elie",
}

colt.sayHi();
colt.sayHi.call(elie);
