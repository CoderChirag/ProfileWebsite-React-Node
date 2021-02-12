import React from 'react';
import WorkHead from "./WorkHead";
import Card from "./Card";
 
const Work = () => {

   function checkTheme(){
      if (document.getElementById("dark-icon").style.color === "white"){
         let cards = document.querySelectorAll(".work-hero-card");
         let p = document.querySelectorAll("p");
         for(let i of cards){
            i.style.backgroundColor = "rgb(59, 59, 59)";
         }
         for (let i of p){
            i.style.color = "#33ff00";
         }
      }
   }

    return (
       <div className="main" onLoad={checkTheme}>
         <WorkHead />
         <p>Take a look at the Websites and Web Apps I have made.</p>
         <Card />
       </div> 
    );
}
 
export default Work;