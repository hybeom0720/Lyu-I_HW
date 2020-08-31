//Lexical This

function Prefixer(prefix){
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
    //this는 상위 스코프인 prefixArray 메소드 내의 this를 가르킨다.
    return arr.map(x => `${this.prefix} ${x}`);
};

const pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'Kim']));

//화살표 함수는 call, apply, bind 메소드를 사용하여 this를 변경할 수 없다.

window.x = 1;
const normal = function() {return this.x;};
const arrow = () => this.x;

console.log(normal.call({x:10})); //10
console.log(arrow.call({x:10})); //1

