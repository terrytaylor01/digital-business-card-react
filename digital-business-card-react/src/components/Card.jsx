import React from "react";
import headshot from "../assets/headshot.jpg";

import CardBody from "./CardBody";
import CardFooter from "./CardFooter"

export default function Card() {
    return (
        <div className="card-wrapper">
          <img src={headshot} className="card-headshot" />
          <CardBody/>
          <CardFooter/>
        </div>

    )
}