//Construvtor function for new dogs

function Dog(name, age){
    this.name = name;
    this.age = age;
    this.bark = function(){
        return this.name + " just barked!"
    };
}

var rusty = new Dog("Rusty", 3)
var fido = new Dog("Fido", 2)

rusty.bark();
fido.bark();