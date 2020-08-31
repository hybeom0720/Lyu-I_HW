//Hoisting이란 var 선언문이나 function 선언문 등을 해당 스코프의 선두로 옮긴 것처럼 동작하는 특성을 말함
//그러나 let 은 동작 안해
//

console.log(foo); //undefined
var foo;

consoel.log(bar); //Error; Uncaught ReferenceError: bar is not defined
let bar;

//선언 단계 (Declaration phase)
//변수를 실행 컨텍스트의 변수 객체(Variable Object)에 등록한다. 이 변수 객체는 스코프가 참조하는 대상이 된다.
//
//초기화 단계 (Initialization phase)
//변수 객체 (Variable Object)에 등록된 변수를 위한 공간을 메모리에 확보한다. 이 단계에서 변수는 undefined로 초기화 된다.
//
//할당 단계 (Assignment phase)
//undefined로 초기화된 변수에 실제 값을 할당한다.
//
//(TDZ(일시적 사각지대, Temporal Dead Zone) -> 스코프의 시작 지점부터 초기화 시점 전까지의 구간을 의미)
//

console.log(foo);

let foo;
console.log(foo);

foo = 1;
console.log(foo);

let foo = 1;

{
	console.log(foo);
	let foo = 2; //block level Scope를 가지게 된다. 코드 브록의 선두부터 초기화가 이루어지는 지점까지 일시적 사각지대(TDZ) foo is not defined.
}



