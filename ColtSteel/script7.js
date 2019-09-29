//In case of setTimeout the word "this" refers to the global object and NOT colt object, 
//...becuase there is setTimeout so the refers to this object was not declared.
//In the case below "this" refers to the window object, because settimeout is method on the window object.
var colt= {
    firstName: "colt",
    sayHi: function(){
        settimeout(function(){
            console.log("Hi " + this.firstName);
      },1000);
    },
  }

 //we can not use call and apply to change the reference to the key word "this",
 //... because we use in our case setTimeout method.

 //So in our code we use the word "this" in a setTime out, we have to asign the keyword this to the exact object,
 //we want tp use. According to the Rule 2, keyword this refers to the nearest parent object. so we actualy put
 //as an argument a word "this". So now code will know, that "this.firstName" refers to really colt object.

var colt= {
    firstName: "Colt",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hi " + this.firstName);
      }.bind(this),1000);
    },
  }

colt.sayHi(); // returns: Hi Colt

//In other cases we can set the object name, we mean, but this case is not used that much.

var colt2= {
    firstName: "Colt2",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hi " + this.firstName);
      }.bind(colt2),1000);
    },
  }  

colt2.sayHi(); // returns: Hi Colt2