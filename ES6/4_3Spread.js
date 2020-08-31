// 배열은 각각 원소들로, String은 iterable로 Map과 Set도 iterable로 분리한다. 하지만 일반 객체는 불가능

console.log(...[1,2,3]) // 1,2,3

console.log(..."Hello") //H e l l o

console.log(...new Map([['a', '1'], ['b','2']])); //['a', '1'] ['b', '2']
console.log(...new Set([1,2,3])); // 1 2 3

console.log(...{a:1, b:2}) //=> 안됨

