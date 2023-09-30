import React from "react";

export default function CardBody() {
  return (
    <div className="card-body">
      <div className="card-body-headtext">
        <h1>Terrence Taylor</h1>
        <h3>Frontend Developer</h3>
        <h4>terrencetaylordev.website</h4>
      </div>
      <div className="card-button-wrapper">
        <a className="card-button-email">
          <h2 className="button-text">Email</h2>
        </a>
        <a className="card-button-linkedin">
          <h2 className="button-text"> LinkedIn</h2>
        </a>
      </div>
      <div className="card-body-content">
        <h2>About</h2>
        <p>
          I am a Frontend Developer with an interest in beautiful and responsive
          solutions. I primarily work in ReactJS for front-end, but I am always
          up to date on the latest breakthroughs within the space!
        </p>
      </div>
      <div className="card-body-content">
        <h2>Interests</h2>
        <p>
          PC Hardware and Gaming, 3D Modelling, Camping, Cars and Music.
        </p>
      </div>
    </div>
  );
}
