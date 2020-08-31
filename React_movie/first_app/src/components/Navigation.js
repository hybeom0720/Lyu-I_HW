import React from "react";
import { Link } from "react-router-dom"

function Navigation() {
    return(
    <div>
        <Link to = "/">Home</Link>
        <Link to = "/about">About</Link>
        {/* <Link to = "/about">About</Link> */}
        {/* Link has to be inside in Router */}
    </div>
    );
}

export default Navigation;