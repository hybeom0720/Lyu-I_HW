import React, { useState, useEffect, useRef} from "react";
import ReactDOM from "react-dom";

function App(){
    const input = useRef();
    setTimeout(() => input.current.focus(), 5000)
    return(
        <div className="App">
            <div>
                Hi
            </div>
            <input ref = {input} placeholder ="la" />
        </div>
    );
}

const rootElment = document.getElementById("root");
ReactDOM.render(<App />, rootElment);