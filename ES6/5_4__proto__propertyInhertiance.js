//ES5
var parent = {
    name: 'parent',
    sayHi: function(){
        console.log('Hi! '+ this.name);
    }
};

//프로토타입 패턴 상속

var child = Object.create(parent);
child.name = 'child';

parent.sayHi();
child.sayHi();

//ES6

const parent = {
    name : 'parent',
    sayHi(){
        console.log('Hi !' + this.name);
    }
};

const child = {
    __proto__: parent,
    name: 'child'
};

parent.sayHi();
child.sayHi();