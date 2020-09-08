import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function App(){
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