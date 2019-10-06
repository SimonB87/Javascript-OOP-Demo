# Advanced-JS---keyword-this-OOP

## Section "JavaScript the tricky stuff" of Colt Steel Bootcamp for web development

## Section Keyword "this"

### RULES OF DETRMINING KEY WORD "this"
1. Outside of a declared object, "this" means the global (window) object.
2. If "this" is inside an declared object, its value is the closest parent object.
3. Choose, what we want to context of the "this" to be using call, apply or bind.
4. The "new" keyword is used to declare a brand new object fromm thin air.

### METHODS

| NAME METHOD  | PARAMETERS | INVOKE IMMEDIATELY |
| ------------- | ------------- | ------------- |
| Call  | thisArg, a, b, c, ...  |  Yes |
| Apply  | thisArg, [a, b, c, ...]  |  Yes  |
| Bind  | thisArg, a, b, c, ...  |  No  |

### Call method 
* Sets, what the "this" is related to.
* PARAMETERS:  thisArg, a, b, c, d, ...
    * this way function can take in any number of arguments.
* INVOCE IMMEDIATELY?: Yes.

### Apply method 
* Sets, what the "this" is related to.
* PARAMETERS: Apply can take only two parameters, first is , what should the this be, second is a array of arguments, we want to pass to the function, in which way we change the value of the keyword "this".

### Bind method 
* Almost identical to call.
* Bind returns function definition and not invoces the function definition to the "thisArg".
* Bind anables us to save different function with determined different value of the keyword "this" and invoke them in a later time. 
* Bind is good for more advanced coding like setTimeOut.
* Bind can be used, if we dont know all the arguments passed to the function. So we get a function definition with some of the parameters set. This is called PARTIAL APPLICATION.
* Bind has appliacation in cases of asinchonous code, like case of usage of setTimeout.

## Section on object oriented programming

## Object oriented programming
* Programming using objects.
* These objects are constructed from what are called "classes", which we can think of like a blueprint. We call these objects created from classes "instances".
* The aim is to make classes abstract and modular.
* Javascript doesnt have a support for classes.
    * We mimic the classes by using objects and functions.

### Constructor functions
* We can use a function as a blueprint for what each house should be - we call these kinds of functions "constructor" functions.
* The class has first letter capitalized as a convention.
* The objects created from Classes are called "instances".

### The "new" keyword and OOP
* In case a "new" is used to declare a new object.
* It sets the key word "this" is to newly declared object.
* The "new" keyword must be used with a function.
* The "new" keyword creates a new object. 
* The "new" keyword sets the keyword "this" to the newly created object. 
* The "new" keyword implicitly adds "return this" to the end of the function, which follows it. 
* The "new" keyword adds a property onto the empty object, which can be accessed by calling "__proto__", which links the property on the constructor function to the empty object.
    *   The "__proto__" is pronounced “dunder proto” due to the double underscore notation it borrows from Python.

### Prototypes
* Every constructor function has a property on it called "prototype", which is an object.
* The prototype object has a property on it called "constructor", which points back to the constructor function.
* Anytime an object is created using a "new" keyword, a property called "__proto__" gets created, linking the object and the prototype property of the constructor function.
* Prototype is an object, which can have me methods and properties placed on it.
    * These methods and properties can be shared among any objects created by that constructor function, when the "new" keyword is used.
* If JavaScript can not find methods and properties, it looks into objects __proto__ for them in there.
    * Prototype chain: If JavaScript can not find a method, it goes into __proto__ (first) and searches it, if JS still cant find, it goes into that nested another __proto__(second) to search for the method, untill it reaches the second __proto__ with a value of "null", where the __proto__ chain ends.

## Closure
* A closure is a functionthat makes use of variables defined in outer functions that have previous that have previously returned.

### Private variables
* Variables, that can not be modified externaly are private. There are no private variable sin javaScript, but closure can help us. 
* a...