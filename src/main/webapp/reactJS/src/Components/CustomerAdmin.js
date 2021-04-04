import { Component } from "react";
import { Row, Table } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Delete from "./Delete";
import { connect } from "react-redux";
import { isCustomer, isDistributor, isLogin, register } from "../action";
import axios from 'axios';
import UserService from './UserService';
export class CustomerAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          name: "username1",
          password: "1234",
          address: "adress1",
          email: "adi@fci",
          phone: "123456789"
        },
        {
          id: 1,
          name: "username2",
          password: "1234",
          address: "adress1",
          email: "adi@fci",
          phone: "123456789"
        },
        {
          id: 2,
          name: "username3",
          password: "1234",
          address: "adress1",
          email: "adi@fci",
          phone: "123456789"
        }
      ]
    };
  }
  componentDidMount(){
    UserService.getUsers(this.props.token).then((response) => {
        console.log(response.data);
        this.setState({ items: response.data.data})
    });
    // console.log(response.data);
  }
  render() {
    const itemList = this.state.items.map((item) => {
      return (
        <tr key={item.userId}>
          <td>{item.userId}</td>
          <td>{item.userName}</td>
          <td>{item.password}</td>
          <td>{item.address}</td>
          <td>{item.phone}</td>
          <td>{item.email}</td>
        </tr>
      );
    });
    return (
      <>
        <Router>
          <Link to="/delete">
            <Row style={{ width: "95%", margin: "auto" }}>
              <MdDelete size="1.6rem" color="#ff1230" />
              <h5>Delete</h5>
            </Row>
          </Link>
          <Table
            striped
            bordered
            hover
            size="md"
            style={{ width: "95%", margin: "auto" }}
          >
            <thead>
              <tr>
                <th>Id</th>
                <th>Username</th>
                <th>Password</th>
                <th>Adress</th>
                <th>phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>{itemList}</tbody>
          </Table>
          <Switch>
            <Route
              exact
              path="/delete"
              render={() => <Delete authType="Administrator"  title="Delete Customer"/>}
            />
          </Switch>
        </Router>
      </>
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
    isLogin: () => {
      dispatch(isLogin());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomerAdmin);
