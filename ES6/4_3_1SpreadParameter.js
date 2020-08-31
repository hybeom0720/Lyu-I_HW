const arr = [1, 2, 3];

foo(...arr);

//구방식
//foo.apply(null, arr);


function foo(v, w, x, y, z){
    console.log(v)
    console.log(w)
    console.log(x)
    console.log(y)
    console.log(z)
}

foo(1, ...[2,3], 4, ...[5])