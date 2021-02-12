import React from "react";
import { NavLink } from 'react-router-dom';

function NavList(){
    return (
        <div className="nav-list">
            <ul>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/work">Work</NavLink></li>
                <li><NavLink to="/">Home</NavLink></li>
            </ul>
        </div>
    );
}

export default NavList;