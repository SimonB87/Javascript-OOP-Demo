//We creted a new person constructor. Every time a new object from it is created the same method "sayHi()" is put to the object.
//... this is not very efficient, since we want to only declare the method once and have it accessable from everywhere.

function Person(name){
   this.name = name;
   this.sayHi = function(){
       return "Hi" + this.name;
   }
}

var elie = new Person("Elie");

elie.sayHi(); // returns: Hi Elie

//Refactoring...

function Person(name){
    this.name = name;
}

Person.prototype.sayHi = function(){
    return "Hi" + this.name;
}

elie = new Person("Elie");
elie.sayHi(); // Hi Elie
