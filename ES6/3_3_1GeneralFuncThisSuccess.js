//First Method

function Prefixer(prefix){
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr){
    var that = this;
    return arr.map(function (x){
        return that.prefix + ' ' + x;
    });
};

var pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'Kim']));

//Second Method

function Prefixer(prefix){
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr){
    return arr.map(function (x) {
        return this.prefix + ` `+x;
    }, this);
};

var pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'Array']))


//Third Method
function Prefixer(prefix){
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
    return arr.map(function (x){
        return this.prefix + ` ` + x;
    }.bind(this)); //this Prefixer 생성자 함수의 인스턴스
};

var pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'Kim']));
