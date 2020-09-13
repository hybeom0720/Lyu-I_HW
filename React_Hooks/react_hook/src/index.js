import React, { useState, useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import useAxios from "./useAxios";
//beforeunload => Before closing the window, allow the function done.

const App = () =>{
    const {loading, data, error, refetch} = useAxios({url:"https://cors-anywhere.herokuapp.com/https://yts.am/api/v2/list_movies.json"}, );
    console.log(`Loading: ${loading} \n Error: ${error} \n Data: ${JSON.stringify(data)}`);
    return(
        <div className="App">
            <h1>{data&&data.status} </h1>
            <h2>{loading? "Loading":"loading"}</h2>
            <button onClick = {refetch}>Refetch</button>
        </div>
    );
}

const rootElment = document.getElementById("root");
ReactDOM.render(<App />, rootElment);