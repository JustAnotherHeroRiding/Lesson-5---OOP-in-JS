

## Nearly Everything is an object!!
- Every object has a prototype object
- If we define a class and log it, it will return only the prototype with the class functions underneath
- If we log the object directly, it will show the functions directly
- If we modify the method inside the class, it will use the modified method
- when we call `object.method()` it will use the first method found, starting from the top ending at the prototype defined in the class
- All properties are local for the currently created object
- All functions are inside the object(Prototype Array for the class), only applicable with classes and not for objects

## Origin of undefined
- When we call a function, it searches for a locally created function
- If it is not found it searches in the class prototype
- If it is not found in the class prototype it searches in the default prototype
- If it is not found there, then it will return undefined


## Difference `__proto__` and class.prototype
- When editing class.prototype we access the class prototype directly from the class
- when using `__proto__` we access it from object
- object.__proto__ === class.prototype if compared will return true
- If we add this.age in the construction it will appear on top above the prototype array and **not in the prototype array** 

## Prototype chain
- When calling a function talk for an object, it will check the top most object for the function
- If the object extends another class it will check this class if it has it(the prototype array) and then the base proto array

## Factory Design Pattern
- It is used when we do not know the type of data and interfaces we will be working with
- In TS we prefix the class by abstract
- This means we cannot create an object for this class
- The class will be used as a base class for further classes, however it will define their skeleton
- if we define an interface we need to use implements Interface while for classes it is extends Class


### Take a look at the factory #DONE 
### Work with the prototype chain
### See examples of the design pattern
