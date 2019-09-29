var colt= {
  firstName: "colt",
  sayHi: function(){
    return "Hi " + this.firstName;
  },
  addNumbers: function(a,b,c,d){
    return this.firstName + " just calculated " + (a+b+c+d);
  }
}

var elie = {
  firstName: "Elie",
}

vat elieCalc = colt.addNumbers.bind(elie,1,2,3,4); //
elieCalc(); // Elie just calculated 10

var elieCalc2 = colt.addNumbers.bind(elie,1,2);
elieCalc(3,4);
