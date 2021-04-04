import { Component } from "react";
import { Card, Form, Col, Row, Button } from "react-bootstrap";
import { connect } from "react-redux";

import { isCustomer, isDistributor, isLogin, register } from "../action";
import axios from 'axios';
import UserService from './UserService';
export class OrderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productCode: "1234",
      productName: "",
      minQty: "",
      tax: "",
      discount: "",
      orderQty: ""
    };
  }
  updateOrder = (data) => {
    console.log(data.productName);
    console.log(data.productCode);
    console.log(data.minQty);
    console.log(data.tax);
    console.log(data.discount);
    console.log(data.orderQty);
    console.log(this.props.token);
    const payload ={
      productName:data.productName,
      orderQueue:data.orderQty
    };
    UserService.postOrder(this.props.token, payload).then((response) => {
      console.log(response.data);
    });
  };
  render() {
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
            <Form.Group as={Row} controlId="formBasicEmail">
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
            <Form.Group as={Row} controlId="formBasicEmail">
              <Form.Label column sm={4}>
                Product Name
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="text"
                  placeholder="Product Name"
                  value={this.state.productName}
                  onChange={(e) =>
                    this.setState({ productName: e.target.value })
                  }
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formBasicEmail">
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
            </Form.Group>
            <Form.Group as={Row} controlId="formBasicquatity">
              <Form.Label column sm={4}>
                Min Qty to Order
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="text"
                  placeholder="Min Qty to Order"
                  value={this.state.minQty}
                  onChange={(e) => this.setState({ minQty: e.target.value })}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formBasicEmail">
              <Form.Label column sm={4}>
                Ordering Quantity
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="text"
                  placeholder="Ordering Quantity"
                  value={this.state.orderQty}
                  onChange={(e) => this.setState({ orderQty: e.target.value })}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formBasicEmail">
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
