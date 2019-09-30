//The aim is to reduce the number of duplicated code in the constructor functions:

// 1) Original code is:
function Car(make, model,year){
    this.make = make;
    this.model = model;
    this.year = year;
    // we can also set properties on the keyword this that are present value
    this.numWheels = 4;
}

function Motorbyke(make, model,year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 2;
}

// 2a) Rewriten the code with call this way:
function Car(make, model,year){
    this.make = make;
    this.model = model;
    this.year = year;
    // we can also set properties on the keyword this that are present value
    this.numWheels = 4;
}

function Motorbyke(make, model,year){
    //using call method to use code from the Car function. in this context, 
    //...they keyword this will be the object created from the Motorbyke function
    Car.call(this, make, model, year);
    this.numWheels = 2;
}

var skoda = new Car("Skoda", "Octavia", 2015); 
skoda; // returns: Car {make: "Skoda", model: "Octavia", year: 2015, numWheels: 4}

var honda = new Motorbyke("Honda", "Azuro", 2018);
honda; // returns: Motorbyke {make: "Honda", model: "Azuro", year: 2018, numWheels: 2}

// 2b) Rewriten the code with apply this way:
function Car(make, model,year){
    this.make = make;
    this.model = model;
    this.year = year;
    // we can also set properties on the keyword this that are present value
    this.numWheels = 4;
}

function Motorbyke(make, model,year){
    //using call method to use code from the Car function. in this context, 
    //...they keyword this will be the object created from the Motorbyke function
    Car.apply(this, [make, model, year]);
    this.numWheels = 2;
}

// Or we can use the keyword "arguments"
function Motorbyke(make, model,year){
    //using call method to use code from the Car function. in this context, 
    //...they keyword this will be the object created from the Motorbyke function
    Car.apply(this, arguments);
    this.numWheels = 2;
}