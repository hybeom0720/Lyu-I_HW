import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const useTitle = (initialTitle)=>{
    const [title,setTitle] = useState(initialTitle)
    const updateTitle = () =>{
        const htmlTitle = document.querySelector("title")
        htmlTitle.innerText = title;
    }
    useEffect(updateTitle, [title]);
    return setTitle;
};


function App(){
    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater("Home"), 5000);
    return(
        <div className="App">
            <div>
                Hi
            </div>
        </div>
    );
}

const rootElment = document.getElementById("root");
ReactDOM.render(<App />, rootElment);