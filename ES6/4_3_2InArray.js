var arr = [1,2,3];
console.log([...arr, 4,5,6]); // [1,2,3,4,5,6]

var arr1 = [1,2,3];
var arr2 = [4,5,6];

//ES5
//Array.prototype.push.apply(arr1, arr2);

arr1.push(...arr2);

console.log(arr1); //[1,2,3,4,5,6]

//splice

const arr1 = [1,2,3,6];
const arr2 = [4,5];

//Array.prototype.splice.apply(Arr1, [3,0].concat(arr2));
//3번에 새로운 요소 삽입 0개 제거!
arr1.splice(3,0, ...arr2);

console.log(arr1); // {1,2,3,4,5,6}

//으용 Shallow copy( 얕은 복사) -> 아무리 봐도 이거 깊은 복사인 거 같은데

const arr = [1,2,3];
const copy = [...arr];
// 이건 깊은 복사인데..

const todos = [
    {id:1, content : "HTML", completed: false},
    {id:2, content : 'CSS', completed: true},
    {id:4, content : "Javascript", completed: false}
]

const _todos = [...todos];

//from Arry-like object to Array
const htmlCollection = document.getElementsByTagName('li');
const newArray = [...htmlCollection];



