//Rest Spread

const n = {x:1, y:2, ...{a:3, b:4}};
console.log(n); //{x:1, y:2, a:3, b:4};

//Rest Property
const {x,y,...z} = n;
console.log(x,y,z); // 1 2 {a:3, b:4}

//z로 묶어서 표현

//spraed와 object assign을 활용하면 다음과 같이 활용 가능.

const merged = {...{x:1, y:2}, ...{y:10, z:3}};
console.log(merged); //{x:1, y:10, z:3};

const changed = {... {x:1, y:2}, y:100}
console.log(changed) // {x:1, y:100}

const added = {...{x:1, y:2}, z:0};

console.log(added);

