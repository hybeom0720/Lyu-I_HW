const Foo = () =>{};

//화살표 함수는 prototype 프로퍼티가 없다.

console.log(Foo.hasOwnProperty('prototype')); // false:

const foo = new Foo();

