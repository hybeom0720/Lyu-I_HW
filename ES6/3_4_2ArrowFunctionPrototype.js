//Fail

const person = {
    name: 'Lee',
};

Object.prototype.sayHi = () => console.log(`Hi ${this.name}`);

person.sayHi();

//Good
const person = {
    name: "Lee"
};

Object.prototype.sayHi = function(){
    console.log(`Hi $(this.name)`);
};

person.sayHi();