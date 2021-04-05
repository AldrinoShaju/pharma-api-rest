import { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { isCustomer, isDistributor, isLogin, register, customersDta, ordersDta } from "../action";
import axios from 'axios';
import UserService from './UserService';
export class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerID: ""
    };
  }
  componentDidMount() {
    this.setState({
      customerID: ""
    });
  }

  deleterUser = (id) => {
    console.log(this.props.customersData);

    if(this.props.title==("Delete Customer")){
    UserService.getDeleteCust(this.props.token, id).then((response) => {
      console.log(response.data);
      if(response.data.status===false){
        alert(`Invalid ID. Check Again`);
      }else if(response.data.status===true){
        UserService.getUsers(this.props.token).then((response) => {
          console.log(response.data);
          //this.setState({ items: response.data.data})
          this.props.customersDta(response.data.data)
      });
      }
    });
    }

    else if(this.props.title==("Delete Order")){
      UserService.getDeleteOrder(this.props.token, id).then((response) => {
        //console.log(response.data);
        if(response.data.status===false){
          alert(`Invalid ID. Check Again`);
        }else if(response.data.status===true){
          UserService.getOrders(this.props.token).then((response) => {
            console.log(response.data);
            //this.setState({ items: response.data.data})
            this.props.ordersDta(response.data.data)
          });
        }
      });
    }
    else if(this.props.title==("Order Accepting")){
      UserService.getDistOrder(this.props.token, id).then((response) => {
        console.log(response.data);
        if(response.data.status===false){
          alert(`Process Failed`);
        }else if(response.data.status===true){
          UserService.getOrders(this.props.token).then((response) => {
            console.log(response.data);
            //this.setState({ items: response.data.data})
            this.props.ordersDta(response.data.data)
          });
        }
      });
    }
  };
  render() {
    return (
      <Card
        style={{
          width: "80%",
          margin: "auto",
          padding: "1rem",
          marginTop: "1.5rem"
        }}
      >
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Body>
          <Form
            onReset={(e) => {
              e.preventDefault();
              this.componentDidMount();
            }}
            onSubmit={(e) => {
              e.preventDefault();
              this.deleterUser(this.state.customerID);
            }}
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                required
                placeholder="Enter ID"
                value={this.state.customerID}
                onChange={(e) => this.setState({ customerID: e.target.value })}
              />
            </Form.Group>
            <center>
              <Button varient="warning" type="submit">
                {this.props.authType==="Distributor"?"Accept":"Delete"}
              </Button>
              <Button
                varient="warning"
                type="reset"
                style={{ marginLeft: ".5rem" }}
              >
                Clear
              </Button>
            </center>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAdmin: state.admin,
    token: state.token,
    customersData: state.customersData,
    ordersData: state.ordersData,
    
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    isLogin: () => {
      dispatch(isLogin());
    },
    customersDta: (cust) => {
      dispatch(customersDta(cust))
    },
    ordersDta: (ord) => {
      dispatch(ordersDta(ord))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Delete);


