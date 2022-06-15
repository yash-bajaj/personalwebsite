
import React from "react";
import "./NameSection.css";
import cone from "./halfcircle.svg";



function NameSection() {
    return(
        <div className="namesection">
           <img className="halfcircle" src={cone} alt=""/>
           <h1>Hi, I'm <span className="greentext">Yash,</span></h1>
            <p>and I'm a Web Developer.</p>        
        </div>
    );
}


export default NameSection;
