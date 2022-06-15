
import React from "react";
import "./CredentialsSection.css";
import circle from "./circle.svg";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function CredentialsSection() {
    return(
<div className="credentialssection">

<h1>Credentials</h1>

<img className="circle" src={circle} alt=""/>
<div className="credentials">
<h3 className="greentext">Education</h3>
<p>BTech Computer Science
    <br/>(2019-2023)</p>
<h3 className="greentext">Skills</h3>
<p>Web Development<br/>
Web Automation<br/>
Flutter Development
<br/></p>
</div>
       
        </div>
    );
}


export default CredentialsSection;





<Container>
        
<Row>
<Col></Col>
<Col>
</Col>
</Row>
</Container>