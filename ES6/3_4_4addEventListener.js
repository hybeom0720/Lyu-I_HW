//Fail

var button = document.getElementById('myButton');

button.addEventListener('click', () =>{
    console.log(this === window);
    this.innerHTML = "clicked button"
})

//Success
var button = document.getElementById('myButton');

button.addEventListener('click', function(){
    console.log(this === button);
    this.innerHTML = 'Clicked button';
})