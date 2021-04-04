import { Component } from "react";
import { Button, Card, Form, Row } from "react-bootstrap";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import OrderPage from "./OrderPage";
import { isCustomer } from "../action";
import { connect } from "react-redux";

class CustomerPage extends Component {
  submit = () => {
    this.props.isCustomer();
  };
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
              <Card.Title>Welcome </Card.Title>
              <div style={{ paddingLeft: "1rem" }}>
                <Row>
                  <Link to="/cust/order">Click to place an order</Link>
                </Row>
                <Row>
                  <Button
                    onClick={() => {
                      this.props.isCustomer();
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
          <Route exact path="/cust/order" component={OrderPage} />
        </Switch>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isCustomer: state.customer
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    isCustomer: () => {
      dispatch(isCustomer());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomerPage);
