const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

/*function handleClick(){
	const currentClass = title.className;
	if (currentClass !== CLICKED_CLASS){
		title.className = CLICKED_CLASS;
	} else{
		title.className = "";
	}
}
*/

function handleClick(){
	const hasClass = title.classList.contains(CLICKED_CLASS);
	if(hasClass){
		title.classList.remove(CLICKED_CLASS);
	} else {
		title.classList.add(CLICKED_CLASS);
	}
}
/*
function handleClick(){
	title.classList.toggle("click", handleClick);
}

 */
function init(){
	title.addEventListener("click", handleClick);
}

init();

