// const square = function (x) {
// 	return x *x
// }

// const square = (x) => {
// 	return x*x 
// }

// const square = (x) => x*x

// console.log(square(3))

const event ={
	name: 'Birthday Party',
	guestList: ['Andrew','Jen',"Mike"],
	printGuestList : function () {
		console.log('Guest list for' + this.name)

		this.guestList.forEach(function (guest){
			console.log(guest+' is attending '+this.name)
		})

	}
}

event.printGuestList()