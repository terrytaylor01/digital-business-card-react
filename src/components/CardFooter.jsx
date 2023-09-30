import React from "react";
import ghlogo from "../assets/gh.png";
import inlogo from "../assets/ins.png";


export default function CardFooter() {
  return (
    <div className="card-footer">
      <a href="https://github.com/terrytaylor01"> 
        <img className="card-footer-logo" src={ghlogo} />
      </a>
      <a href="https://www.instagram.com/terrytaylor.1/">
        <img className="card-footer-logo" src={inlogo} />
      </a>
    </div>
    
  );
}