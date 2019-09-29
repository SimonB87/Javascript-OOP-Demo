# Advanced-JS---keyword-this-OOP

## Section41 of Colt Steel Bootcamp for web development

### RULES OF DETRMINING KEY WORD "this"
1. Outside of a declared object, "this" means the global (window) object.
2. If "this" is inside an declared object, its value is the closest parent object.
3. Choose, what we want to context of the "this" to be using call, apply or bind.
4. Abc def...

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
* Bind returns function definition and not invoces the function definition.
* Bind anables us to save different function with determined different value of the keyword "this" and invoke them in a lter time.
* Bind is good for more advanced coding like setTimeOut