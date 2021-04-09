import { Component } from "react";
import { Card, Row, Col, Container, CardDeck} from "react-bootstrap";
class Contact extends Component {
  render() {
    return (
      <Card className="homebg" border="light" style={{ margin: "auto", width: "100%", height:"700px", marginTop: "0.5rem", paddingTop:"9rem"}}>
        
         <Container>
            <Card border="light" style={{ margin: ".4rem" , borderRadius:"1rem"}}>
              
            <Card.Body >
              <div className="">
      <div className="about-page">
        <div className="leftside">
        <div className="text-contact">
        <h1>Contact Us</h1>
        <p>Main Office <br/>Pharma Store,<br/> Inc.108 Wilmot RoadDeer field,<br/> IL 60015</p>
        <p>General Inquiries For general inquiries, <br/>please contact: <br/>USA, +1 (847) 315-3700 International, <br/>+44 (0) 1932 870 550</p>
      </div>
      <div className="image-about">
            <img className="image-about" src="https://miro.medium.com/max/4064/1*qYUvh-EtES8dtgKiBRiLsA.png" width="500px" height="300px"></img>
          </div>
      </div>
      </div>
      </div>
              </Card.Body>
            </Card>
          </Container>
      </Card>
      
    );
  }
}
export default Contact;
