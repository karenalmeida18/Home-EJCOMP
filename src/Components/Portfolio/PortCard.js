import React from "react";
import './portfolio.css';



export default function PortCard({image1, image2, text}){
    return (
      <>
      <div className="container fadeScale">
        <img src={image1} className="image"></img>
        <div className="container2">
          <div className="overlay">
                <img src={image2} className="image2"></img>
                  <div className="text">{text}</div>   
          </div>
        </div>
      </div>
      </>
    );
}

