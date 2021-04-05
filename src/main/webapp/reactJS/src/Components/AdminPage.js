import { Component } from "react";
import { Button, Card, Form, Row } from "react-bootstrap";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import CustomerAdmin from "./CustomerAdmin";
import OrderAdmin from "./OrderAdmin";
import { isLogin, customersDta, ordersDta } from "../action";
import { connect } from "react-redux";
import UserService from './UserService';

class AdminPage extends Component {
  submit() {
    console.log();
  }
  componentDidMount(){
    UserService.getUsers(this.props.token).then((response) => {
        console.log(response.data);
        //this.setState({ items: response.data.data})
        this.props.customersDta(response.data.data)
    });

    UserService.getOrders(this.props.token).then((response) => {
      console.log(response.data);
      //this.setState({ items: response.data.data})
      this.props.ordersDta(response.data.data)
    });
    // console.log(response.data);
  }
  
  render() {
    return (
      <Router>
        <Card
          bg="light"
          style={{ width: "80%", margin: "auto", marginTop: "2rem" }}
        >
          <Card.Body>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                this.submit();
              }}
            >
              <Card.Title>Welcome Admin</Card.Title>
              <div style={{ paddingLeft: "1rem" }}>
                <Row>
                  <Link to="/admin/customeradmin">
                    Go to Customer Administration
                  </Link>
                </Row>
                <Row>
                  <Link to="/admin/orderadmin">Go to Order Administration</Link>
                </Row>
                <Row>
                  <Button
                    type="submit"
                    onClick={() => {
                      this.props.isLogin();
                    }}
                  >
                    <BiLogOutCircle /> LogOut
                  </Button>
                </Row>
              </div>
            </Form>
          </Card.Body>
        </Card>
        <Switch>
          <Route exact path="/admin/customeradmin" component={CustomerAdmin} />
          <Route exact path="/admin/orderadmin" component={OrderAdmin} />
        </Switch>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.token,
    isAdmin: state.admin,
    customersData: state.customersData,
    ordersData: state.ordersData
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
export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
