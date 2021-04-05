import { Component } from "react";
import { Card, Form, Col, Row, Button, DropdownButton, Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
// import DropdownButton from 'react-bootstrap/DropdownButton'
import { isCustomer, isDistributor, isLogin, register } from "../action";
import axios from 'axios';
import UserService from './UserService';
export class OrderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productCode: "Select a Product",
      productName: "",
      minQty: "",
      tax: "",
      discount: "",
      orderQty: "",
      amount:"",
      perItem:"",
      product:[],
      lastOrderQueue:""
    };
    // this.updateOrder = this.updateOrder.bind(this);
    // this.getProductDetails = this.getProductDetails(this);
    
  }

  componentDidMount(){
    axios.get("http://localhost:8080/api/getProducts")
        .then(response => {
          if(response.data.status===true){
            //alert("user data sent");
            console.log(response.data);
            this.setState({ product:response.data.data});
            
          }
    });

    UserService.getOrderSize(this.props.token).then((response) => {
        console.log(response.data);
        this.setState({lastOrderQueue:response.data.data})
        //this.setState({ items: response.data.data})
        //this.props.ordersDta(response.data.data)
    });
  }

  getProductDetails = (name)=>{
    this.setState({ 
      productCode:name.productCode,
      productName:name.productName,
      minQty:name.minQuantity,
      perItem:name.perItem
    }); 
  }

  updateOrder = (data) => {
    // console.log(data.productName);
    // console.log(data.productCode);
    // console.log(data.minQty);
    // console.log(data.tax);
    // console.log(data.discount);
    // console.log(data.orderQty);
    // console.log(this.props.token);
    if(data.orderQty!=0){
      if(data.minQty<=data.orderQty){
        const payload ={
          productCode:data.productCode,
          productName:data.productName,
          netCost:data.orderQty,
          orderQueue:data.lastOrderQueue +1
        };
        UserService.postOrder(this.props.token, payload).then((response) => {
          console.log(response.data);
          if(response.data.status==true){
            alert( `${response.data.data}`)
          }
        });
      }else{
        alert(`Order quantity is not above min quantity`);
      }
      
    }
  };
  render() {
  const productList = this.state.product.map((pro) => {
    return (
      <Dropdown.Item as="button" onClick={()=>{this.getProductDetails(pro)}}>{pro.productName}</Dropdown.Item>
    );
  });
  
    return (
      <Card style={{ width: "90%", margin: "auto", marginTop: "1rem" }}>
        <Card.Title style={{ padding: "1rem" }}>Place an Order</Card.Title>
        <Card.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              this.updateOrder(this.state);
            }}
          >
            <Form.Group as={Row} controlId="productCode">
              <Form.Label column sm={4}>
                Product Code
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                
                  type="text"
                  disabled
                  placeholder="Product Code"
                  value={this.state.productCode}
                  onChange={(e) =>
                    this.setState({ productCode: e.target.value })
                  }
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="productName">
              <Form.Label column sm={4}>
                Product Name
              </Form.Label>
              <Col sm={3}>
              <DropdownButton id="dropdown-item-button" title={this.state.productName!==""?this.state.productName:"Select Product"}>
                {productList}
              </DropdownButton>
              </Col>
              {/* <Col sm={4}>
                <Form.Control
                  type="text"
                  placeholder="Product Name"
                  disabled
                  value={this.state.productName}
                  onChange={(e) =>
                    this.setState({ productName: e.target.value })
                  }
                />
                </Col> */}
            </Form.Group>
            {/* <Form.Group as={Row} controlId="formBasicEmail">
              <Form.Label column sm={4}>
                Tax
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="text"
                  placeholder="Tax"
                  value={this.state.tax}
                  onChange={(e) => this.setState({ tax: e.target.value })}
                />
              </Col>
            </Form.Group> */}
            <Form.Group as={Row} controlId="minOrder">
              <Form.Label column sm={4}>
                Min Qty to Order
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="text"
                  disabled
                  placeholder="Min Qty to Order"
                  value={this.state.minQty}
                  onChange={(e) => this.setState({ minQty: e.target.value })}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="orderQty">
              <Form.Label column sm={4}>
                Ordering Quantity
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="text"
                  placeholder="Ordering Quantity"
                  value={this.state.orderQty}
                  onChange={(e) => this.setState({ orderQty: e.target.value, amount: (e.target.value)*this.state.perItem})}
                />
              </Col>
            </Form.Group>
            {/* <Form.Group as={Row} controlId="formBasicEmail">
              <Form.Label column sm={4}>
                Discount
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="text"
                  placeholder="Discount"
                  value={this.state.discount}
                  onChange={(e) => this.setState({ discount: e.target.value })}
                />
              </Col>
            </Form.Group> */}
            <Form.Group as={Row} controlId="amount">
              <Form.Label column sm={4}>
                Amount in Rs
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="text"
                  disabled
                  placeholder="Amount"
                  value={this.state.amount}
                  onChange={(e) => this.setState({ amount: e.target.value })}
                />
              </Col>
            </Form.Group>
            <center>
              <Button type="submit">Place Order</Button>
            </center>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.token
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    isAdminLogin: (token) => {
      dispatch(isLogin(token));
    },
    isDistributor: (token) => {
      dispatch(isDistributor(token));
    },
    isCustomer: (token) => {
      dispatch(isCustomer(token));
    },
    toRegister: () => {
      dispatch(register());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
