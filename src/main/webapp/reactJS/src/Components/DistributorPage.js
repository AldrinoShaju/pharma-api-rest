import { Component } from "react";

import { Col, Table, Button } from "react-bootstrap";
import { BiLogOutCircle } from "react-icons/bi";
import { connect } from "react-redux";
import { isDistributor, ordersDta, productsDta } from "../action";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Delete from "./Delete";
import UserService from './UserService';
class DistributorPage extends Component {
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
  componentDidMount(){
    UserService.getOrders(this.props.token).then((response) => {
        console.log(response.data);
        //this.setState({ items: response.data.data})
        this.props.ordersDta(response.data.data)
    });
    // console.log(response.data);
  }

  

  render() {
    //console.log(this.props.ordersData)
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
          <Col sm={3} style={{ margin: ".5rem" }}>
            <Link to="/dist/order">Click to Select Your Order </Link>

            <Button
              type="submit"
              onClick={() => {
                console.log(this.props.token);
                this.props.isDistributor();
              }}
            >
              <BiLogOutCircle /> LogOut
            </Button>
          </Col>
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
              path="/dist/order"
              render={() => (
                <Delete
                  authType="Distributor"
                  item="Order"
                  title="Order Accepting"
                />
              )}
            />
          </Switch>
        </Router>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ordersData: state.ordersData,
    isdistributor: state.distributor,
    token: state.token
    
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    isDistributor: () => {
      dispatch(isDistributor());
    },
    ordersDta: (ord) => {
      dispatch(ordersDta(ord))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DistributorPage);
