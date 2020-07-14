const title = document.querySelector("#title");

const BASE_COLOR = "red";
const OTHER_COLOR = "blue";

function handleClick(){
	const currentColor = title.style.color;
	if (currentColor === BASE_COLOR){
		title.style.color = OTHER_COLOR;
	} else{
		title.style.color = BASE_COLOR;}
}

function init(){
	title.style.color = BASE_COLOR;
	title.addEventListener("click", handleClick);
}

init();

function handleOffline(){
	console.log("haha");
}

function handleOnline(){
	console.log("hahahaha");
}


window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);

