# Advanced-JS---keyword-this-OOP

## Section "JavaScript the tricky stuff" of Colt Steel Bootcamp for web development

## Keyword "this"

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

### The "new" keyword
* In case a "new" is used to declare a new object, key word "this" is used to newly declared object

## Object oriented programming
* Programming using objects.
* These objects are constructed from what are called "classes", which we can think of like a blueprint. We call these objects created from classes "instances".
* The aim is to make classes abstract and modular.
* Javascript doesnt have a support for classes.
    * We mimic the classes by using objects and functions.

### Constructor functions
* We can use a function as a blueprint for what each house should be - we call these kinds of functions "construcotr" functions.
* The class has first letter capitalized as a convention.

### The "new" keyword and OOP
* The "new" keyword must be used with a function.
* The "new" keyword creates a new object. 
* The "new" keyword sets the keyword "this" to the newly created object. 
* The "new" keyword implicitly adds "return this" to the end of the function, which follows it. 
* The "new" keyword adds a property onto the empty object, which can be accessed by calling "__proto__", which links the property on the constructor function to the empty object.
    *   The "__proto__" is pronounced “dunder proto” due to the double underscore notation it borrows from Python.