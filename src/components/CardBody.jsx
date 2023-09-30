import React from "react";
import email_logo from "../assets/envelope-solid.svg";
import linkedin_logo from "../assets/linkedin-in.svg";

export default function CardBody() {
  return (
    <div className="card-body">
      <div className="card-body-headtext">
        <h1>Terrence Taylor</h1>
        <h3>Frontend Developer</h3>
        <h4>terrencetaylordev.website</h4>
      </div>
      <div className="card-button-wrapper">
        <a href="mailto:terrencetaylor01@gmail.com" target="_blank" className="card-button-email">
          <img className="card-button-icon email" src={email_logo} />
          <h2 className="button-text">Email</h2>
        </a>
        <a
          href="https://www.linkedin.com/in/terrence-taylor-863ab71a7/"
          className="card-button-linkedin"
        >
          <img className="card-button-icon linkedin" src={linkedin_logo} />
          <h2 className="button-text"> LinkedIn</h2>
        </a>
      </div>
      <div className="card-body-content">
        <h2>About</h2>
        <p>
          I am a Frontend Developer with an interest in beautiful and responsive
          solutions. I primarily work in ReactJS, but I am keeping track of new technologies and workflows!
        </p>
      </div>
      <div className="card-body-content">
        <h2>Interests</h2>
        <p>3D Modelling, Camping, Cars and Music, PC Hardware and Gaming.</p>
      </div>
    </div>
  );
}
