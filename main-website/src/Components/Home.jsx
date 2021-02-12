import React from 'react';
import IntroHead from "./IntroHead";
import IntroText from "./IntroText";
import AvatarImg from "./AvatarImg";

const Home = () => {

   function checkTheme(){
      if (document.getElementById("dark-icon").style.color === "white"){
         let buttons = document.querySelectorAll("button");
         let grnFg = document.querySelectorAll("p");
         for (let i of buttons){
            i.style.backgroundColor = "rgb(59, 59, 59)";
            i.style.color = "#33ff00";
         }
         for (let i of grnFg){
            i.style.color = "#33ff00";
         }
         for (let i of buttons){
            i.addEventListener("mouseover", () => {
                i.style.backgroundColor = "#33ff00";
                i.style.color = "rgb(59, 59, 59)";
            });
            i.addEventListener("mouseout", () => {
                i.style.backgroundColor = "rgb(59, 59, 59)";
                i.style.color = "#33ff00";
            });
         }
      }
   }

    return (
       <div className="main" onLoad={checkTheme}>
          <IntroHead />
          <AvatarImg />
          <IntroText />
       </div>
    );
}
 
export default Home;

// isEnabledDarkMode={props.isEnabledDarkMode}