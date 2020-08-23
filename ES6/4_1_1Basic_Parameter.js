function sum(x=0, y=0){
    return x + y;
}

console.log(sum(1));
console.log(sum(1,3));

//length와 argument 객체에 영향은 주지 않는다.

function foo(x,y = 0){
    console.(arguments);
}

console.log(foo.length);

sum(1); // Arguments  {'0': 1}
sum(1,2); //Arguments {'0':1, '0':2}

