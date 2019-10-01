//making use of closure to produce a private variable
function counter(){
    var count = 0;
    return function(){
        return ++count;
    }
}

var result = counter();

result; // retunrs function definition:
// ƒ (){
//         return ++count;
//     }

//Lets call the result() three times
result(); // returns: 1
result(); // returns: 2
result(); // returns: 3

count; // returns: Uncaught ReferenceError: count is not defined
// So in this way we definied a private variable noone can modify


//Another private variable exercise

function classRoom(){
    var instructors = ["Colt", "Elie"];
    return {
        getInstructor: function(){
            return instructors;
        },
        addInstructor: function(instructor){
            instructors.push(instructor);
            return instructors;
        }
    }
}

class1 = classRoom();
class1.getInstructor(); // returns: ["Colt", "Elie"]

class1.addInstructor("Jan"); // returns: ["Colt", "Elie", "Jan"]


//Lets create a new class:
class2 = classRoom();
class2.getInstructor(); // returns: ["Colt", "Elie"]
//The number original instructors stay the same