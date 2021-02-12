import React from 'react';
 
const Contact = (props) => {

   function checkTheme(){
      if (document.getElementById("dark-icon").style.color === "white"){
         let buttons = document.querySelectorAll("button");
         let p = document.querySelectorAll("p");
         let whiteBg = document.querySelectorAll("input, textarea");
         for(let i of buttons){
            i.style.backgroundColor = "rgb(59, 59, 59)";
            i.style.color = "#33ff00";
         }
         for (let i of p){
            i.style.color = "#33ff00";
         }
         for (let i of whiteBg){
            i.style.backgroundColor = "#eee";
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
       <div className="contact-main" onLoad={checkTheme}>
         <div className="contact">
            <h1 id="intro-head" className="fadeInLeft" style={{fontSize: "3.5rem", fontFamily: 'Poppins', marginBottom: "5px"}}>Let's Get In Touch</h1>
            <p>If you want to get connected with me for some projects, feel free to fill up this form.</p>
            <div className="contact-form">
               <form action="/contact" method="post">
                  <label>Name</label>
                  <input type="text" name="name" required />
                  <label>Email Address</label>
                  <input type="email" name="email" required />
                  <label>Your Message</label>
                  <textarea rows="5" name="msg" required />
                  <button type="submit">Send Message</button>
               </form>
            </div>
         </div>
         <div className="contact-img">
            <img src="images/contact.png" alt="contact-img"/>
         </div>
       </div>
    );
}
 
export default Contact;