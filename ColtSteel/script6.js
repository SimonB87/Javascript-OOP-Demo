var colt= {
  firstName: "colt",
  sayHi: function(){
    return "Hi " + this.firstName;
  },
  addNumbers: function(a,b,c,d){
    return this.firstName + " just calculated " + (a+b+c+d);
  }
}

var ellie = {
  firstName: "Ellie",
}

var ellieCalc = colt.addNumbers.bind(ellie,1,2,3,4); //
ellieCalc(); // Ellie just calculated 10

var ellieCalc2 = colt.addNumbers.bind(ellie,1,2);
ellieCalc2(3,4); // Ellie just calculated 10
