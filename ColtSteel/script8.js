//Using a "new" keyword refers to a new keayword created from thin air.

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName
}

var elie = new Person("Elie", "Schoppik");

elie.firstName;//returns "Elie"
elie.lastName;//returns "Schoppik"