//Es6

const obj = {
    name: "Lee",
    // sayHi: function()
    sayHi(){
        console.log('Hi' + this.name);
    }
};

obj.sayHi();

