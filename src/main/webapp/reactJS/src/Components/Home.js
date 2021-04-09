import { Component } from "react";
import { Card, Row, Col, Container, CardDeck} from "react-bootstrap";
import axios from 'axios';
import homeimg from '../media/blo4.jpg';
import { BiBorderRadius } from "react-icons/bi";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      productItems: [
        {
          productName: "product 1",
          price: 20,
          productCode: 1
        },
        {
          productName: "product 2",
          price: 20,
          productCode: 2
        },
        {
          productName: "product 3",
          price: 20,
          productCode: 3
        },
        {
          productName: "product 4",
          price: 20,
          productCode: 4
        },
        {
          productName: "product 5",
          price: 20,
          productCode: 5
        }
      ]
    };
  }
  componentDidMount(){
    axios.get("http://localhost:8080/api/getProducts")
        .then(response => {
          if(response.data.status===true){
            //alert("user data sent");
            console.log(response.data);
            this.setState({ productItems:response.data.data});
            
          }
      });
  }
  
  render() {
    const productItem = this.state.productItems.map((item) => {
      return (
        <CardDeck as={Col} sm={4} md={3} key={item.productCode}>
          <Card border="light" style={{ margin: ".4rem" , borderRadius:"1rem"}}>
            <Card.Body>
              
              <Col>
                <img src={item.src} width="100px" height="100px"></img>
                <Row><h5>{item.productName}</h5></Row>
                <Row><p className="itemprice">Rs. {item.perItem}</p></Row>
              </Col>
            </Card.Body>
          </Card>
        </CardDeck>
      );
    });
    return (
      <div className="homebg">
        
        <Card className="homebg" border="light" style={{ margin: "auto", width: "90%", marginTop: "0.5rem"}}>
          {/* <Card.Title style={{ padding: ".4rem" }}> */}
            {/* <Card className="homebg" border="light" style={{ margin: ".4rem" , borderRadius:"1rem", backgroundColor:"#f6f6f7"}}> */}
            <Container>
            <Card border="light" style={{ margin: ".4rem" , borderRadius:"1rem"}}>
            <Card.Body>
              <div className="hero-box">
            <div className='leftside'>
              <div>
                <h1 className='heading'>A Better <br /> Pharmacy For <br /> Everyone</h1>
                <br />
                <p>Your digital pharmacy like no other bringing health <br /> and wellness
                to your doorstep
                </p>
                <br />
              </div>
            </div>
              <div className='rightside'>
                <div className='img-div'>
                  <img className="imgaq" src={homeimg} alt="" width="350" height="300" />
                
                </div>
              </div>
          </div>
              </Card.Body>
              </Card>
            </Container>
              
            
          

          {/* </Card.Title> */}
          <Card.Body>
            <Container >
              <h4 className="productName">Products Available</h4>
              <Row>{productItem}</Row>
            </Container>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Home;
