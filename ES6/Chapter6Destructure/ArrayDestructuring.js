const arr = [1,2,3];

const [one, two, three] = arr;

console.log(one, two, three);



let x, y, z //xyz 할당을 해줘야만 한다.
[x,y,z=3] = [1,2]
console.log(x,y,z) //123

[x, ...y] = [1,2,3];
console.log(x,y); //1 [2,3]



//Ex 날짜 추출

const today = new Date(); // 표준시 초까지 다 나와요
const formattedDate = today.toISOString().substring(0,10); //"2020-05-21"
const [year, month, day] = formattedDate.split('-');
console.log([year,month,day]);

