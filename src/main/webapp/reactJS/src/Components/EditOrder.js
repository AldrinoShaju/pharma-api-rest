import { Component } from "react";
import { Card, Form, Col, Row, Button, DropdownButton, Dropdown } from "react-bootstrap";
import UserService from './UserService';
import { connect } from "react-redux";
import { isCustomer, isDistributor, isLogin, register, ordersDta } from "../action";
import axios from 'axios';
export class EditOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productCode: "1234",
      productName: "",
      minQty: "",
      tax: "",
      discount: "",
      orderQty: "",
      dist:"",
    };
    
  }
  
  componentDidMount(){
    UserService.getOrderDetails(this.props.token, this.props.customerID).then((response) => {
        if(response.data.status==false){
          alert(`${response.data.data}`)
        }else{
        this.setState({ 
          productCode: response.data.data.productCode,
          productName: response.data.data.productName,
          minQty:response.data.data.minQuantity,
          orderQty:response.data.data.orderQueue,
          discount:response.data.data.netCost,
          dist:response.data.data.dist
        })
      }
    });
  }
  updateOrder = (data) => {
    console.log(data.productName);
    console.log(data.productCode);
    console.log(data.minQty);
    console.log(data.tax);
    console.log(data.discount);
    console.log(data.orderQty);

    const payload={
      productName: data.productName,
      minQuantity: data.minQty,
      orderQueue: data.orderQty,
      netCost: data.discount
    }

    UserService.postOrderUpdate(this.props.token, this.props.customerID,payload).then((response) => {
      console.log(response.data);
      if(response.data.status===false){
        alert(`Updating Order Failed`);
      }else if(response.data.status===true){
        alert(`${response.data.data}`)
        UserService.getOrders(this.props.token).then((response) => {
          console.log(response.data);
          this.props.ordersDta(response.data.data)
        });
      }
  });
  };
  render() {
    return (
      <Card style={{ width: "90%", margin: "auto", marginTop: "1rem" }}>
        <Card.Title style={{ padding: "1rem" }}>Edit The Order</Card.Title>
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
                  disabled
                  placeholder="Product Name"
                  value={this.state.productName}
                  onChange={(e) =>
                    this.setState({ productName: e.target.value })
                  }
                />
              </Col>
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
            <Form.Group as={Row} controlId="formBasicquatity">
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
            <Form.Group as={Row} controlId="formBasicquatity">
              <Form.Label column sm={4}>
                Distributer
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="text"
                  placeholder="Distributer"
                  value={this.state.dist}
                  onChange={(e) => this.setState({ minQty: e.target.value })}
                />
                {/* <DropdownButton id="dropdown-item-button" title={this.state.dist}>
                {distList}
              </DropdownButton> */}
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formBasicEmail">
              <Form.Label column sm={4}>
                Order Queue
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="text"
                  placeholder="Order Queue"
                  value={this.state.orderQty}
                  onChange={(e) => this.setState({ orderQty: e.target.value })}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formBasicEmail">
              <Form.Label column sm={4}>
                NetCost
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="text"
                  placeholder="NetCost"
                  value={this.state.discount}
                  onChange={(e) => this.setState({ discount: e.target.value })}
                />
              </Col>
            </Form.Group>
            <center>
              <Button type="submit">Update</Button>
            </center>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.token,
    ordersData: state.ordersData
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
    },
    ordersDta: (ord) => {
      dispatch(ordersDta(ord))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditOrder);
