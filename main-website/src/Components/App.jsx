import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Work from './Work';
import Contact from './Contact';
import DarkIcon from "./DarkIcon";
import Navbar from './Navbar';
import Footer from "./Footer";
import Error from "./Error";

function App(){
    const [isEnabledDarkMode, enableDarkMode] = React.useState(false);

    function changeTheme(){
        if(!isEnabledDarkMode){
            enableDarkMode(true);
            let darkIcon = document.getElementById("dark-icon");
            let button = document.querySelectorAll("button");
            let socialIcons = document.querySelectorAll(".social-icons a i");
            let blackBg = document.querySelectorAll("body");
            let greyBg = document.querySelectorAll("button, .menu-wrap .menu>div, .work-hero-card");
            let grnFg = document.querySelectorAll("body,button, .nav-list li a, p, .social-icons a i, .menu-wrap .menu>div>div>ul>li>a");
            let grnBg = document.querySelector(".menu-wrap .hamburger>div");
            let whiteBg = document.querySelectorAll("input, textarea");
            darkIcon.style.color = "white";
            darkIcon.style.opacity = "1";
            grnBg.style.backgroundColor = "#33ff00"
            for (let i of grnFg){
                i.style.color = "#33ff00";
            }
            for (let i of greyBg){
                i.style.backgroundColor = "rgb(59, 59, 59)";
            }
            for (let i of blackBg){
                i.style.backgroundColor = "#0D1117";
            }
            for (let i of whiteBg){
                i.style.backgroundColor = "#eee";
            }
            for (let i of button){
                i.addEventListener("mouseover", () => {
                    i.style.backgroundColor = "#33ff00";
                    i.style.color = "rgb(59, 59, 59)";
                });
                i.addEventListener("mouseout", () => {
                    i.style.backgroundColor = "rgb(59, 59, 59)";
                    i.style.color = "#33ff00";
                });
            }
            for (let i of socialIcons){
                i.addEventListener("mouseover", () => {
                    i.style.color = "rgb(59, 59, 59)";
                });
                i.addEventListener("mouseout", () => {
                    i.style.color = "#33ff00";
                });
            }

        }else{
            enableDarkMode(false);
            let darkIcon = document.getElementById("dark-icon");
            let button = document.querySelectorAll("button");
            let styles = document.querySelectorAll("body, button, .nav-list li a, p, .social-icons a i, .menu-wrap .hamburger>div, .menu-wrap .menu>div, .menu>div>div>ul>li>a, .work-hero-card");
            let socialIcons = document.querySelectorAll(".social-icons a i");
            darkIcon.style.color = null;
            darkIcon.style.opacity = null;
            for (let i of styles){
                i.style.color = null;
                i.style.backgroundColor = null;
            }
            for (let i of socialIcons){
                i.addEventListener("mouseover", () => {
                    i.style.color = "blue";
                });
                i.addEventListener("mouseout", () => {
                    i.style.color = "rgb(59, 59, 59)";
                });
            }
            for (let i of button){
                i.addEventListener("mouseover", () => {
                    i.style.backgroundColor = "blue";
                    i.style.color = "white"
                });
                i.addEventListener("mouseout", () => {
                    i.style.backgroundColor = "rgb(59, 59, 59)";
                    i.style.color = "white"

                });
            }

        }
    }


    return (
        <BrowserRouter>
        <div id="#root-div">
            <DarkIcon onClick={changeTheme}/>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home}/>
                {/* <Route path="/work" component={Work} /> */}
                <Route path="/work"><Work /></Route>
                <Route path="/contact" component={Contact} />
                <Route  component={Error}/>
            </Switch>
            <Footer />
        </div> 
        </BrowserRouter>
    );
}

export default App;