import { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";

import { connect } from "react-redux";

import { isCustomer, isDistributor, isLogin, register } from "../action";
import axios from 'axios';
class LoginState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }
  componentDidMount() {
    this.setState({
      userName: "",
      password: ""
    });
  }

  submit = async (authType, userName, password) => {
    if (userName === "" || password === "") {
      console.log(this.props.token);
      alert("enter username and password");
    } else if (authType === "Administrator") {
      const user ={
        name : userName,
        password : password
      };
      axios.post("http://localhost:8080/login", user)
        .then(response => {
        if(response.data.status===true && response.data.auth==="ADMIN"){
          //alert("user data sent");
          console.log(response.data);
          this.props.isAdminLogin(response.data.data);
        }
      });
      
    } else if (authType === "Distributor") {
      const user ={
        name : userName,
        password : password
      }; 
      axios.post("http://localhost:8080/login", user)
        .then(response => {
          if(response.data.status===true && response.data.auth==="DIST"){
            //alert("user data sent");
            console.log(response.data);
            //this.setState({ auth: response.data.auth, token:response.data.data });
            //UserService.getToken(response.data.data);
            this.props.isDistributor(response.data.data);
          }
      });
      
    } else if (authType === "Customer") {
      const user ={
        name : userName,
        password : password
      }; 
      axios.post("http://localhost:8080/login", user)
        .then(response => {
          if(response.data.status===true && response.data.auth==="CUSTOMER"){
            //alert("user data sent");
            console.log(response.data);
            //this.setState({ auth: response.data.auth, token:response.data.data });
            this.props.isCustomer(response.data.data);
          }
      });
      
    }
  };
  render() {
    return (
      <>
        <Card
          bg="light"
          text="secondary"
          border="dark"
          style={{ margin: "2rem", padding: "0.5rem" }}
        >
          <Card.Title>{this.props.authType}</Card.Title>
          <Card.Body>
            <Form
              onReset={(e) => {
                e.preventDefault();
                this.componentDidMount();
              }}
              onSubmit={(e) => {
                e.preventDefault();
                this.submit(
                  this.props.authType,
                  this.state.userName,
                  this.state.password
                );
              }}
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Username"
                  value={this.state.userName}
                  onChange={(e) => this.setState({ userName: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  value={this.state.password}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </Form.Group>
              {this.props.authType === "Customer" ? (
                <Button
                  onClick={() => {
                    this.props.toRegister();
                  }}
                  style={{ marginLeft: ".5rem" }}
                  variant="primary"
                >
                  New User
                </Button>
              ) : null}
              <Button
                style={{ marginLeft: ".5rem" }}
                variant="secondary"
                type="submit"
              >
                Submit
              </Button>
              <Button
                style={{ marginLeft: ".5rem" }}
                variant="secondary"
                type="reset"
              >
                Clear
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAdmin: state.admin,
    isDistributor: state.distributor,
    isCustomer: state.customer,
    isRegister: state.register,
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
export default connect(mapStateToProps, mapDispatchToProps)(LoginState);
