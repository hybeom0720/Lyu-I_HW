// ES5
var Person = (function () {
    // Constructor
    function Person(name) {
      this._name = name;
    }
  
    // public method
    Person.prototype.sayHi = function () {
      console.log('Hi! ' + this._name);
    };
  
    // return constructor
    return Person;
}());
  
var me = new Person('Lee');
me.sayHi(); // Hi! Lee.

console.log(me instanceof Person); // true