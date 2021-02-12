import React from "react";
import {NavLink} from "react-router-dom";

function IntroText(){
    return (
        <div className="intro-text">
              <p>I am in first year B.E CSE at Chitkara University, Punjab. I know<b> Python</b> and <b>MERN Stack</b>. I create awesome Websites and Web Apps. If you are looking for a partner for any project based on this, the feel free to contact me.</p>
              <button id="btn"><NavLink to="/contact">Contact Me</NavLink></button>
        </div>
    );
}

export default IntroText;