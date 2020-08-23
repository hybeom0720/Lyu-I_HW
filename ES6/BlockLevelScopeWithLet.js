let foo = 123;

{
	let foo = 456;
	let bar = 456;
}

console.log(foo); //456
//console.log(bar); -> 오류
