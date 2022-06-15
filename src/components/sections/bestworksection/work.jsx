
import React from "react";
import { Card } from "react-bootstrap";
import "./BestWorkSection.css";




function Work(props) {
    return(
        <Card className="card">
        <Card.Img variant="top" src={props.image} className="cardimg"/>
        <Card.Body>
          <h3 className="cardh3">{props.title}</h3>
          <p className="cardp">
           {props.description}
          </p>
        </Card.Body>
      </Card>
    );
}


export default Work;
