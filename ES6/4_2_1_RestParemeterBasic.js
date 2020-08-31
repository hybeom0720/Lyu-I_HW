function foo(...reset){
    console.log(Array.isArray(rest)); //true
    console.log(rest); // {1,2,3,4,5}
}

foo(1,2,3,4,5);

function foo(param, ...rest){
    console.log(param); 1
    console.log(rest); [2,3,4,5]
}

foo(1,2,3,4,5);

function bar(param1, param2, ...rest){
    console.log(param1); //1
    console.log(param2); //2
    console.log(rest); //345
}

bar(1,2,3,4,5);

// ...rest는 항상 마지막 parameter여야만 한다. (배열이 어떻게 될지 모름)

//length property에 영향을 주지 않는다.

function foo(...rest){}
console.log(foo.length); //0

function bar(x, ...rest) {}
console.log(bar.length); //1

function baz(x,y, ...rest) {}
console.log(baz.length); //2


