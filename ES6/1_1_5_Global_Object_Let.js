var foo =123;
console.log(window.foo); //123

let foo =123; //전역변수
console.log(window.foo); //undefined

//모든 객체의 유일한 최상위 객체 의미
//Browser-side에서는 Window 객체
//Server-Side(Node.js)에서는 Global 객체를 의미
//var 키워드로 선언된 변수를 전역 변수로 사용하면 전역 객체의 프로퍼티가 된다.

