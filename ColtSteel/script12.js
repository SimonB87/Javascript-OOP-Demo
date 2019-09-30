// Prototypes

// We have a constructor function called "Person"
function Person (name) {
    this.name = name;
}

// There is a property on the function called "prototype"
var elie = new Person("Elie");
var colt = new Person("Colt");

elie.__proto__ === Person.prototype // Returns: true

Person.prototype.constructor === Person; // Returns: true

// We can add methods and propertoes to the constructor function:
// Lets create a new property (this was created even after the constructor function was declared
Person.prototype.isInstructor = true; 

//Lets look inside the previously created objects:
elie.isInstructor // returns: true
colt.isInstructor // returns: true

//The reason why now the objects "elie" and "colt" have access to the "isInstructor" property is because there is property "__proto__"
