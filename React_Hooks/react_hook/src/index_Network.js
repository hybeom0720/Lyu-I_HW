import React, { useState, useEffect, useRef} from "react";
import ReactDOM from "react-dom";

//beforeunload => Before closing the window, allow the function done.

// const useNetwork = onChange => {
//     const [status, setStatus] = useState(navigator.onLine);
//     const handleChange= () =>{
//         if(typeof onChange === "function"){
//             onChange(navigator.online);
//         }
//         setStatus(navigator.onLine);
        
//     }
//     useEffect(() =>{
//         window.addEventListener("online", handleChange);
//         window.addEventListener("offline", handleChange);
//         () => {
//             window.removeEventListener("online", handleChange);
//             window.removeEventListener("offline", handleChange);
//         };
//     }, [])
//     return status
// }

const useNetwork = onChange => {
    const [status, setStatus] = useState(navigator.onLine || true);
    const handleChange = () => {
      if (onChange && typeof onChange === "function") {
        onChange(navigator.onLine);
      }
      setStatus(navigator.onLine);
    };
    useEffect(() => {
      window.addEventListener("online", handleChange);
      window.addEventListener("offline", handleChange);
    //   () => {
    //     window.removeEventListener("online", handleChange);
    //     window.removeEventListener("offline", handleChange);
    //   }
    }, []);
    return status;
};
  

const App = () =>{
    const handleNetworkChange = (online) =>{
        console.log(online ? "We just went online": "we are oging to online");
    }
    const online = useNetwork();
    return(
        <div className="App">
            <h1>{online ? "Online" : "OffLine"} </h1>
        </div>
    );
}

const rootElment = document.getElementById("root");
ReactDOM.render(<App />, rootElment);