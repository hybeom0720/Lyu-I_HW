import React, { useState, useEffect, useRef} from "react";
import ReactDOM from "react-dom";

//beforeunload => Before closing the window, allow the function done.

const App = () =>{
    return(
        <div className="App">
            <h1>Hello </h1>
        </div>
    );
}

const rootElment = document.getElementById("root");
ReactDOM.render(<App />, rootElment);