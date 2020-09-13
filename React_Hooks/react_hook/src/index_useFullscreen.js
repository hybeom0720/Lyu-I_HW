import React, { useState, useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import {elementType} from "prop-types"

//beforeunload => Before closing the window, allow the function done.

const useFullscreen = (callback) =>{
    const element = useRef();
    const triggerFull = () =>{
        if(element.current){
            element.current.requestFullscreen();
            if(callback && typeof callback === "function"){
                callback(true)
            }
        }
        
    };
    const exitFull = () => {
        document.exitFullscreen();
        if (callback && typeof callback === "function"){
            callback(false);
        }
    };
    return {element, triggerFull, exitFull}
}

const App = () =>{
    const onFullS = (isFull) => {
        console.log(isFull ? "We are full" : "We are small")
    }
    const {element, triggerFull, exitFull} =useFullscreen(onFullS);
    return(
        <div className="App" style = {{height : "1000vh"}}>
            <div ref ={element}>
                <button onClick = {exitFull}>exitFullscreen</button>
                <img src = "sample.jpeg"/>
            </div>
            <button onClick = {triggerFull}> Make FullScreen</button>
        </div>
    );
}

const rootElment = document.getElementById("root");
ReactDOM.render(<App />, rootElment);