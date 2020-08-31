var pow = function (x) { return x*x };
console.log(pow(10));

const pow = x => x*x;
console.log(pow(10));

var arr = [1,2,3];
var pow = arr.map(function(x){
    return x * x;
});

console.log(pow);

const arr = [1,2,3];
const pow = arr.map(x=> x*x);

console.log(pow);