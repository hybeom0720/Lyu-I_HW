//Wrong Expression
const person = {
    name: 'Lee',
    sayHi: () => console.log(`Hi ${this.name}`)
};

person.sayHi() //Hi un defined

//Good Expression

const person = {
    name : 'Lee',
    sayHi() {
        console.log(`Hi ${this.name}`);
    }
};

person.sayHi(); //Hi lee