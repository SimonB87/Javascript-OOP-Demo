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

person.dog.sayHello();
