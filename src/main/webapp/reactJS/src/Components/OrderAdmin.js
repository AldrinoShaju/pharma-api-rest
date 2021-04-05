import { Component } from "react";
import { Row, Table, Button, Form, Col } from "react-bootstrap";
import { MdDelete } from "react-icons/md";

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Delete from "./Delete";
import EditOrder from "./EditOrder";
import UserService from './UserService';
import { connect } from "react-redux";

import { isCustomer, isDistributor, isLogin, register } from "../action";
import axios from 'axios';
export class OrderAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerID: "",
      items: [
        {
          id: 0,
          productCode: "p123",
          productName: "productnaem",
          minQuatity: 10,
          netCost: 120,
          Amount: 12520,
          orderQueue: 20
        },
        {
          id: 1,
          productCode: "p153",
          productName: "productnaem",
          minQuatity: 10,
          netCost: 120,
          Amount: 12520,
          orderQueue: 20
        },
        {
          id: 2,
          productCode: "p124",
          productName: "productnaem",
          minQuatity: 10,
          netCost: 120,
          Amount: 12520,
          orderQueue: 20
        }
      ]
    };
  }
  // componentDidMount(){
  //   //let location = useLocation();
  //   UserService.getOrders(this.props.token).then((response) => {
  //       console.log(response.data);
  //       this.setState({ items: response.data.data})
  //   });
  //   // console.log(response.data);
  // }
  render() {
    const itemList = this.props.ordersData.map((item) => {
      return (
        <tr key={item.orderId}>
          <td>{item.orderId}</td>
          <td>{item.productCode}</td>
          <td>{item.productName}</td>
          <td>{item.minQuantity}</td>
          <td>{item.orderQueue}</td>
          <td>{item.netCost}</td>
          <td>{item.amount}</td>
        </tr>
      );
    });
    return (
      <>
        <Router>
          <Row style={{ width: "97%", margin: "auto" }}>
            <Link to="/delete">
              <Row style={{ marginLeft: "1rem", marginTop: "1.5rem" }}>
                <MdDelete size="1.6rem" color="#ff1230" />
                <h5>Delete</h5>
              </Row>
            </Link>
            <Col>
              <Form
                inline
                style={{ margin: "1rem" }}
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <Form.Group controlId="formBasic">
                  <Form.Control
                    type="text"
                    placeholder="Enter ID"
                    value={this.state.customerID}
                    onChange={(e) =>
                      this.setState({ customerID: e.target.value })
                    }
                  />
                  <Button
                    as={Link}
                    to="/editOrder"
                    type="submit"
                    variant="primary"
                    style={{ marginLeft: "1rem" }}
                  >
                    Edit
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Table
            striped
            bordered
            hover
            responsive
            size="md"
            style={{ width: "95%", margin: "auto" }}
          >
            <thead>
              <tr>
                <th>Id</th>
                <th>ProductCode</th>
                <th>ProductName</th>
                <th>minQuatity</th>
                <th>OrderQueue</th>
                <th>NetCost</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>{itemList}</tbody>
          </Table>
          <Switch>
            <Route
              exact
              path="/delete"
              render={() => <Delete authType="Administrator"  title="Delete Order" />}
            />
            <Route
              exact
              path="/editOrder"
              render={() =>
                this.state.customerID === "" ? (
                  alert('enter the CustomerID')
                ) : (
                  <EditOrder customerID={this.state.customerID} />
                )
              }
            />
          </Switch>
        </Router>
      </>
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
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderAdmin);
