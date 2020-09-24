//Method call and apply are similar, the differences is, how they pass in the arguments
//AIM: We want to use the same method sayHi() for different object ellie. We can use call method to do it.

var colt = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi " + this.firstName;
  }
}

var ellie = {
  firstName: "Ellie",
}

colt.sayHi();//"Hi Colt"

colt.sayHi.call(ellie); //"Hi Elie"

colt.sayHi.apply(ellie);//"Hi Elie"


var rich = {
  firstName: "Richard",
  sayHi: function(){
    return "Hi " + this.firstName;
  },
  addNumbers: function(a,b,c,d){
    return this.firstName + " just calculated " + (a+b+c+d);
  }
}

rich.addNumbers.call(colt,10,20,30,40);//"Colt just calculated 100"

rich.addNumbers.apply(colt,[1,2,3,4]);//"Colt just calculated 10"