//method call and apply are similar, the differences is, how they pass in the arguments
var colt = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi " + this.firstName;
  }
}

var elie = {
  firstName: "Elie",
}

colt.sayHi();//"Hi Colt"

colt.sayHi.call(elie); //"Hi Elie"

colt.sayHi.apply(elie);//"Hi Elie"


var rich = {
  firstName: "Richard",
  sayHi: function(){
    return "Hi " + this.firstName;
  },
  addNumbers: function(a,b,c,d){
    return this.firstName + " just calculated " + (a+b+c+d);
  }
}

rich.addNumbers.apply(colt,[1,2,3,4]);//"Colt just calculated 10"
