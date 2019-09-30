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

//Exercise:
//Constructor function for a vehicle with properties: make, model, year. Each onject should have property isRunning set to falce.
//Each object should have turnOn method setting the isRunning to true.
//Each object should have turnOff method setting the isRunning to false.
//Each object should have methos called honk, which turns the string "beep" only if the isRunning property is true.

function Vehicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vehicle.prototype.turnOn = function(){
    this.isRunning = true;
}

Vehicle.prototype.turnOff = function(){
    this.isRunning = false;
}

Vehicle.prototype.honk = function(){
    if ( this.isRunning === true ){
        return "beep";
    }
}

var skoda = new Vehicle("Skoda", "Oct", 2015); 
skoda // returns: Vehicle {make: "Skoda", model: "Oct", year: 2015, isRunning: false}

skoda.isRunning // returns: false

skoda.turnOn();
skoda.isRunning // returns: true

skoda.turnOff(); 
skoda.isRunning() // returns: false

skoda.honk(); // returns: undefined

skoda.turnOn();
skoda.isRunning // returns: true
skoda.honk(); // returns: "beep"