import React from "react";
import NavLogo from "./NavLogo";
import NavList from "./NavList";
import {NavLink} from "react-router-dom";

function Navbar(){

    function uncheck(){
        document.getElementsByClassName("toggler")[0].checked = false;
    }

    return (
        <div>
            <div className="nav">
                <NavLogo />
                <NavList />
            </div>
            <div className="menu-wrap">
                <input type="checkbox" className="toggler" />
                <div className="hamburger">
                    <div></div>
                </div>
                <div className="menu">
                    <div>
                        <div>
                            <ul>
                                <li onClick={uncheck}><NavLink to="/">Home</NavLink></li>
                                <li onClick={uncheck}><NavLink to="/work">Work</NavLink></li>
                                <li onClick={uncheck}><NavLink to="/contact">Contact</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

