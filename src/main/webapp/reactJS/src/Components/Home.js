import { Component } from "react";
import { Card, Row, Col, Container, CardDeck} from "react-bootstrap";
import axios from 'axios';

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
          <Card style={{ margin: ".4rem" }}>
            <Card.Body>
              <Col>
                <img src={item.src} width="100px" height="100px"></img>
                <Row>{item.productName}</Row>
                <Row>Rs. {item.perItem}</Row>
              </Col>
            </Card.Body>
          </Card>
        </CardDeck>
      );
    });
    return (
      <div>
        <Card style={{ margin: "auto", width: "90%", marginTop: "0.5rem" }}>
          <Card.Title style={{ padding: ".4rem" }}>
            Welcome to Pharma Store
            <p>Products: </p>
          </Card.Title>
          <Card.Body>
            <Container>
              <Row>{productItem}</Row>
            </Container>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Home;
