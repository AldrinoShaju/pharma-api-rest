import { Component } from "react";
import { Card, Row, Col, Container, CardDeck} from "react-bootstrap";
class About extends Component{
  render(){
    return(
      <Card className="homebg" border="light" style={{ margin: "auto", width: "100%", height:"700px", marginTop: "0.5rem", paddingTop:"9rem"}}>
        
         <Container>
            <Card border="light" style={{ margin: ".4rem" , borderRadius:"1rem"}}>
              
            <Card.Body >
              <div className="">
                <div className="about-page">
                  <div className="leftside">
                    <div className="text">
                      <h1>About Us</h1>
                      <p>As a global leader in retail and wholesale pharmacy, we touch millions of lives every day by dispensing and distributing medicines, and through our convenient retail locations, digital platforms and health and beauty products</p>
                      <p>The company has more than 100 years of trusted healthcare heritage and innovation in community pharmacy and pharmaceutical wholesaling.</p>
                      <p>One of the world’s largest purchasers of prescription drugs and many other health and well-being products. The company’s size, scale and expertise will help position us to expand the supply of, and address the rising cost of, prescription drugs in the U.S. and worldwide.</p>   
                    </div>
                    <div className="image-about">
                      <img className="image-about" src="https://5.imimg.com/data5/AW/XB/LF/GLADMIN-62499299/selection-059-500x500.png" width="350px" height="300px"></img>
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
export default About;