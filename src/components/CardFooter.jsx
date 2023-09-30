import React from "react";
import fblogo from "../assets/fb.png";
import ghlogo from "../assets/gh.png";
import inlogo from "../assets/ins.png";
import twlogo from "../assets/tw.png";

export default function CardFooter() {
  return (
    <div className="card-footer">
        <img className="card-footer-logo" src={fblogo} />
        <img className="card-footer-logo" src={ghlogo} />
        <img className="card-footer-logo" src={inlogo} />
        <img className="card-footer-logo" src={twlogo} />
    </div>
    
  );
}