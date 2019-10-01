//Closure examples

//...First example
function outer(){
    var data = "Closures are ";
    return function inner(){
        var innerData = "awesome";
        return data + innerData;
    }
}

outer(); // returns: ... function definition (see bellow)
// ƒ inner(){
//         var innerData = "awesome";
//         return data + innerData;
//     }

outer()(); // returns: "Closures are awesome"
// In this way we can use variables in outer functions.

//...Second example

function outer(a){
    return function(b){
        // the inner function is making use of argument "a"
        // ... which was defined in outer function called "outer"
        // ... and by the time this is called, that outer function has returned
        // ... this function called "inner" is a closure
        return a + b;
    }
}

outer(2)(5); // returns: 7
//the exaple outer(2)(5) work only, if we call both function with (arg)(arg)

// We can also define a new variable, which takes in 
var scoreOuter = outer(3);
scoreOuter(10); // returns: 13
