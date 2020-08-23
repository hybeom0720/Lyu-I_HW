var funcs = [];

for (var i = 0; i<3;i++){
	funcs.push(function () {console.log(i);});
}

//배열에서 함수를 꺼내어 호출하낟.

for (var j=0; j<3;j++){
	funcs[j]();
}

// 실패함. 그 이유는 for 루프의 var 가 전역 변수이기 때문이다.
