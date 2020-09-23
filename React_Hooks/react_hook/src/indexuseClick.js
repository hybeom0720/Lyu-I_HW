import React, { useState, useEffect, useRef} from "react";
import ReactDOM from "react-dom";

const useClick = onClick =>{
    // if(typeof onClick !== "function"){
    //     return;
    // } 
    const element = useRef();
    useEffect(()=>{
        if(element.current){
            element.current.addEventListener("click", onClick);
        }
        return () => {
            if (element.current) {
            element.current.removeEventListener("click", onClick);
            }
        }
    }, []); //dependency part
    return element;
}

function App(){
    const sayHello = () => console.log("say Hello");
    const title = useClick(sayHello);
    return(
        <div className="App">
            <h1 ref={title}>Hi</h1>
        </div>
    );
}

const rootElment = document.getElementById("root");
ReactDOM.render(<App />, rootElment);