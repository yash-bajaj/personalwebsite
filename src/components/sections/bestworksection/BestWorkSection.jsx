
import React from "react";
import "./BestWorkSection.css";
import { Row} from "react-bootstrap";
import Work from "./work";
import keeper from "./keeper.png";
import yech from "./yech.png";
import dicee from "./dicee.png";



function BestWorkSection() {
    return(
        <div className="bestworksection">
        <h1>My Best Work</h1>
        <Row xs={1} sm={1} md={1} lg={3} className="row">
      <Work title="Keeper App" description="Google keep like clone in react." image={keeper}/>
      <Work title="yech.tech" description="Personal blog website." image={yech}/>
      <Work title="Dicee game" description="Roll dice and see who wins." image={dicee}/>
        </Row>
        </div>
    );
}


export default BestWorkSection;
