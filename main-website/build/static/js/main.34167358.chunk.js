(this["webpackJsonpmain-website"]=this["webpackJsonpmain-website"]||[]).push([[0],{31:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),o=c.n(r),a=c(18),l=c.n(a),s=c(2),i=c(11),d=c(5),j=c(3),u=c(19),b=c.n(u);var f=function(e){return Object(n.jsx)("h1",{id:"intro-head",children:Object(n.jsx)(b.a,{options:{strings:["Hi\ud83d\udc4b","I'm Chirag Jain","a B.E CSE Student"],autoStart:!0,loop:!0}})})};var h=function(){return Object(n.jsxs)("div",{className:"intro-text",children:[Object(n.jsxs)("p",{children:["I am in first year B.E CSE at Chitkara University, Punjab. I know",Object(n.jsx)("b",{children:" Python"})," and ",Object(n.jsx)("b",{children:"MERN Stack"}),". I create awesome Websites and Web Apps. If you are looking for a partner for any project based on this, the feel free to contact me."]}),Object(n.jsx)("button",{id:"btn",children:Object(n.jsx)(d.b,{to:"/contact",children:"Contact Me"})})]})};var m=function(){return Object(n.jsx)("div",{className:"avatar-img",children:Object(n.jsx)("img",{src:"images/avatar-img.jpg",alt:"logo"})})},v=function(){return Object(n.jsxs)("div",{className:"main",onLoad:function(){if("white"===document.getElementById("dark-icon").style.color){var e,t=document.querySelectorAll("button"),c=document.querySelectorAll("p"),n=Object(s.a)(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;r.style.backgroundColor="rgb(59, 59, 59)",r.style.color="#33ff00"}}catch(j){n.e(j)}finally{n.f()}var o,a=Object(s.a)(c);try{for(a.s();!(o=a.n()).done;){o.value.style.color="#33ff00"}}catch(j){a.e(j)}finally{a.f()}var l,i=Object(s.a)(t);try{var d=function(){var e=l.value;e.addEventListener("mouseover",(function(){e.style.backgroundColor="#33ff00",e.style.color="rgb(59, 59, 59)"})),e.addEventListener("mouseout",(function(){e.style.backgroundColor="rgb(59, 59, 59)",e.style.color="#33ff00"}))};for(i.s();!(l=i.n()).done;)d()}catch(j){i.e(j)}finally{i.f()}}},children:[Object(n.jsx)(f,{}),Object(n.jsx)(m,{}),Object(n.jsx)(h,{})]})};var y=function(){return Object(n.jsx)("h1",{id:"intro-head",className:"fadeInLeft",style:{fontSize:"3.5rem",fontFamily:"Poppins",marginBottom:"5px"},children:"My Work"})};var O=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),c=t[0],o=t[1];return Object(r.useEffect)((function(){fetch("https://api.npoint.io/476f4e001624d79d6683").then((function(e){return e.json()})).then((function(e){o(e.data)}))}),[]),Object(n.jsx)("div",{className:"card-container",children:c.map((function(e){return Object(n.jsx)("div",{className:"work-hero-card",children:Object(n.jsxs)("a",{href:e.url,children:[Object(n.jsx)("img",{className:"work-card-hero-img",src:e.src,alt:e.alt}),Object(n.jsx)("h1",{children:e.h1}),Object(n.jsx)("div",{id:"work-text",children:e.type})]})},e.id)}))})},x=function(){return Object(n.jsxs)("div",{className:"main",onLoad:function(){if("white"===document.getElementById("dark-icon").style.color){var e,t=document.querySelectorAll(".work-hero-card"),c=document.querySelectorAll("p"),n=Object(s.a)(t);try{for(n.s();!(e=n.n()).done;){e.value.style.backgroundColor="rgb(59, 59, 59)"}}catch(a){n.e(a)}finally{n.f()}var r,o=Object(s.a)(c);try{for(o.s();!(r=o.n()).done;){r.value.style.color="#33ff00"}}catch(a){o.e(a)}finally{o.f()}}},children:[Object(n.jsx)(y,{}),Object(n.jsx)("p",{children:"Take a look at the Websites and Web Apps I have made."}),Object(n.jsx)(O,{})]})},g=function(e){return Object(n.jsxs)("div",{className:"contact-main",onLoad:function(){if("white"===document.getElementById("dark-icon").style.color){var e,t=document.querySelectorAll("button"),c=document.querySelectorAll("p"),n=document.querySelectorAll("input, textarea"),r=Object(s.a)(t);try{for(r.s();!(e=r.n()).done;){var o=e.value;o.style.backgroundColor="rgb(59, 59, 59)",o.style.color="#33ff00"}}catch(f){r.e(f)}finally{r.f()}var a,l=Object(s.a)(c);try{for(l.s();!(a=l.n()).done;){a.value.style.color="#33ff00"}}catch(f){l.e(f)}finally{l.f()}var i,d=Object(s.a)(n);try{for(d.s();!(i=d.n()).done;){i.value.style.backgroundColor="#eee"}}catch(f){d.e(f)}finally{d.f()}var j,u=Object(s.a)(t);try{var b=function(){var e=j.value;e.addEventListener("mouseover",(function(){e.style.backgroundColor="#33ff00",e.style.color="rgb(59, 59, 59)"})),e.addEventListener("mouseout",(function(){e.style.backgroundColor="rgb(59, 59, 59)",e.style.color="#33ff00"}))};for(u.s();!(j=u.n()).done;)b()}catch(f){u.e(f)}finally{u.f()}}},children:[Object(n.jsxs)("div",{className:"contact",children:[Object(n.jsx)("h1",{id:"intro-head",className:"fadeInLeft",style:{fontSize:"3.5rem",fontFamily:"Poppins",marginBottom:"5px"},children:"Let's Get In Touch"}),Object(n.jsx)("p",{children:"If you want to get connected with me for some projects, feel free to fill up this form."}),Object(n.jsx)("div",{className:"contact-form",children:Object(n.jsxs)("form",{action:"/contact",method:"post",children:[Object(n.jsx)("label",{children:"Name"}),Object(n.jsx)("input",{type:"text",name:"name",required:!0}),Object(n.jsx)("label",{children:"Email Address"}),Object(n.jsx)("input",{type:"email",name:"email",required:!0}),Object(n.jsx)("label",{children:"Your Message"}),Object(n.jsx)("textarea",{rows:"5",name:"msg",required:!0}),Object(n.jsx)("button",{type:"submit",children:"Send Message"})]})})]}),Object(n.jsx)("div",{className:"contact-img",children:Object(n.jsx)("img",{src:"images/contact.png",alt:"contact-img"})})]})};var p=function(e){return Object(n.jsx)("i",{className:"fas fa-moon ",id:"dark-icon",onClick:e.onClick})};var k=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(d.b,{to:"/",children:Object(n.jsx)("img",{src:"images/logo.png",className:"nav-logo",alt:"logo"})})})};var w=function(){return Object(n.jsx)("div",{className:"nav-list",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/contact",children:"Contact"})}),Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/work",children:"Work"})}),Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/",children:"Home"})})]})})};var C=function(){function e(){document.getElementsByClassName("toggler")[0].checked=!1}return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"nav",children:[Object(n.jsx)(k,{}),Object(n.jsx)(w,{})]}),Object(n.jsxs)("div",{className:"menu-wrap",children:[Object(n.jsx)("input",{type:"checkbox",className:"toggler"}),Object(n.jsx)("div",{className:"hamburger",children:Object(n.jsx)("div",{})}),Object(n.jsx)("div",{className:"menu",children:Object(n.jsx)("div",{children:Object(n.jsx)("div",{children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{onClick:e,children:Object(n.jsx)(d.b,{to:"/",children:"Home"})}),Object(n.jsx)("li",{onClick:e,children:Object(n.jsx)(d.b,{to:"/work",children:"Work"})}),Object(n.jsx)("li",{onClick:e,children:Object(n.jsx)(d.b,{to:"/contact",children:"Contact"})})]})})})})]})]})};var N=function(){return Object(n.jsxs)("div",{className:"social-icons",children:[Object(n.jsx)("a",{href:"https://github.com/CoderChirag",target:"_blank",children:Object(n.jsx)("i",{className:"fab fa-github"})}),Object(n.jsx)("a",{href:"https://www.linkedin.com/in/chirag-jain-9614481b6/",target:"_blank",children:Object(n.jsx)("i",{className:"fab fa-linkedin-in"})}),Object(n.jsx)("a",{href:"https://www.instagram.com/coder_chirag_jain/",target:"_blank",children:Object(n.jsx)("i",{className:"fab fa-instagram"})}),Object(n.jsx)("a",{href:"https://www.facebook.com/profile.php?id=100014606834040",target:"_blank",children:Object(n.jsx)("i",{className:"fab fa-facebook-f"})}),Object(n.jsx)("a",{href:"https://twitter.com/Chirag_Jain847",target:"_blank",children:Object(n.jsx)("i",{className:"fab fa-twitter"})})]})},E=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("p",{children:"Error: Page does not exist!"})})};var S=function(){var e=o.a.useState(!1),t=Object(i.a)(e,2),c=t[0],r=t[1];return Object(n.jsx)(d.a,{children:Object(n.jsxs)("div",{id:"#root-div",children:[Object(n.jsx)(p,{onClick:function(){if(c){r(!1);var e=document.getElementById("dark-icon"),t=document.querySelectorAll("button"),n=document.querySelectorAll("body, button, .nav-list li a, p, .social-icons a i, .menu-wrap .hamburger>div, .menu-wrap .menu>div, .menu>div>div>ul>li>a, .work-hero-card"),o=document.querySelectorAll(".social-icons a i");e.style.color=null,e.style.opacity=null;var a,l=Object(s.a)(n);try{for(l.s();!(a=l.n()).done;){var i=a.value;i.style.color=null,i.style.backgroundColor=null}}catch(J){l.e(J)}finally{l.f()}var d,j=Object(s.a)(o);try{var u=function(){var e=d.value;e.addEventListener("mouseover",(function(){e.style.color="blue"})),e.addEventListener("mouseout",(function(){e.style.color="rgb(59, 59, 59)"}))};for(j.s();!(d=j.n()).done;)u()}catch(J){j.e(J)}finally{j.f()}var b,f=Object(s.a)(t);try{var h=function(){var e=b.value;e.addEventListener("mouseover",(function(){e.style.backgroundColor="blue",e.style.color="white"})),e.addEventListener("mouseout",(function(){e.style.backgroundColor="rgb(59, 59, 59)",e.style.color="white"}))};for(f.s();!(b=f.n()).done;)h()}catch(J){f.e(J)}finally{f.f()}}else{r(!0);var m=document.getElementById("dark-icon"),v=document.querySelectorAll("button"),y=document.querySelectorAll(".social-icons a i"),O=document.querySelectorAll("body"),x=document.querySelectorAll("button, .menu-wrap .menu>div, .work-hero-card"),g=document.querySelectorAll("body,button, .nav-list li a, p, .social-icons a i, .menu-wrap .menu>div>div>ul>li>a"),p=document.querySelector(".menu-wrap .hamburger>div"),k=document.querySelectorAll("input, textarea");m.style.color="white",m.style.opacity="1",p.style.backgroundColor="#33ff00";var w,C=Object(s.a)(g);try{for(C.s();!(w=C.n()).done;){w.value.style.color="#33ff00"}}catch(J){C.e(J)}finally{C.f()}var N,E=Object(s.a)(x);try{for(E.s();!(N=E.n()).done;){N.value.style.backgroundColor="rgb(59, 59, 59)"}}catch(J){E.e(J)}finally{E.f()}var S,q=Object(s.a)(O);try{for(q.s();!(S=q.n()).done;){S.value.style.backgroundColor="#0D1117"}}catch(J){q.e(J)}finally{q.f()}var A,L=Object(s.a)(k);try{for(L.s();!(A=L.n()).done;){A.value.style.backgroundColor="#eee"}}catch(J){L.e(J)}finally{L.f()}var I,B=Object(s.a)(v);try{var _=function(){var e=I.value;e.addEventListener("mouseover",(function(){e.style.backgroundColor="#33ff00",e.style.color="rgb(59, 59, 59)"})),e.addEventListener("mouseout",(function(){e.style.backgroundColor="rgb(59, 59, 59)",e.style.color="#33ff00"}))};for(B.s();!(I=B.n()).done;)_()}catch(J){B.e(J)}finally{B.f()}var W,M=Object(s.a)(y);try{var P=function(){var e=W.value;e.addEventListener("mouseover",(function(){e.style.color="rgb(59, 59, 59)"})),e.addEventListener("mouseout",(function(){e.style.color="#33ff00"}))};for(M.s();!(W=M.n()).done;)P()}catch(J){M.e(J)}finally{M.f()}}}}),Object(n.jsx)(C,{}),Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{exact:!0,path:"/",component:v}),Object(n.jsx)(j.a,{path:"/work",children:Object(n.jsx)(x,{})}),Object(n.jsx)(j.a,{path:"/contact",component:g}),Object(n.jsx)(j.a,{component:E})]}),Object(n.jsx)(N,{})]})})};l.a.render(Object(n.jsx)(S,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.34167358.chunk.js.map