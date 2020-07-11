const nicoInfo = {
    	name: "Nicolas",
    	age: 33,
    	gender: "Male",
	isHandsome: true,
	favMovies: ["Along the gods", "LOTR", "Oldboy"], 
	favFood: [{name:"Kimchi", fatty: false}, {name:"Cheese Burger", fatty:true}]
}

console.log(nicoInfo.gender);

nicoInfo.gender = "Female"

console.log(nicoInfo.gender);

console.log(nicoInfo.favFood);
