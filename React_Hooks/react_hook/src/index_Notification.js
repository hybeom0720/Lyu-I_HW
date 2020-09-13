import React, { useState, useEffect, useRef} from "react";
import ReactDOM from "react-dom";

//beforeunload => Before closing the window, allow the function done.

const useNotification = (title, options) => {
    if(!("Notification" in window)) {
        return;
    }
    const fireNotif = () => {
        if(Notification.permission !== "granted"){
            Notification.requestPermission()
            .then(permission => {
                if(permission === "granted"){
                    new Notification(title, options)
                } else {
                    return;
                }
            });
        } else {
            new Notification(title, options);
        }
    };
    return fireNotif;
}

const App = () =>{
    const triggerNotif = useNotification("Can I steal your Kimichi", {body: "I love kimchi Don't you?"});
    return(
        <div className="App">
            <button onClick = {triggerNotif}>Hello </button>
        </div>
    );
}

const rootElment = document.getElementById("root");
ReactDOM.render(<App />, rootElment);