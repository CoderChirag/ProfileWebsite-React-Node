import React from "react";
import {NavLink} from "react-router-dom";

function NavLogo(){
    return (
        <div>
            <NavLink to="/"><img src="images/logo.png"  className="nav-logo" alt="logo"></img></NavLink>
        </div>
    );
}

export default NavLogo;