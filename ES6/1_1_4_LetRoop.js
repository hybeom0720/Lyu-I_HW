var funcs = [];

for (let i =0; i<3;i++){
    funcs.push(function () {console.log(i); });
}

for (var j = 0; j<3; j++){
    console.dir(funcs[j]);
    funcs[j]();
}