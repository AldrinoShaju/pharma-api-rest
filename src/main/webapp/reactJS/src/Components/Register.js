import { Component } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { register } from "../action";
import axios from 'axios';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      distributorName: "",
      rePassword: "",
      address: "",
      passwordValid: false
    };
  }
  registerUser = (data) => {
    console.log(data.username);
    console.log(data.password);
    console.log(data.rePassword);
    console.log(data.distributorName);
    console.log(data.address);

    const payload ={
      name:data.username,
      password:data.password,
      address:data.address,
      dist: data.distributorName,
      email:"email"
    };
    axios.post("http://localhost:8080/register", payload)
        .then(response => {
        if(response.data!=null){
          //alert("user data sent");
          console.log(response.data);
          //this.setState({ auth: response.data.auth, token:response.data.data });
        }
      });
  };
  render() {
    return (
      <Card
        bg="light"
        style={{ width: "90%", margin: "auto", marginTop: "1rem" }}
      >
        <Card.Title style={{ padding: "1rem" }}>Register a User</Card.Title>
        <Card.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              this.registerUser(this.state);
            }}
          >
            <Form.Group as={Row} controlId="formBasicEmail">
              <Form.Label column sm={4}>
                User Name
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="text"
                  placeholder="User Name"
                  value={this.state.username}
                  onChange={(e) => this.setState({ username: e.target.value })}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formBasicEmail">
              <Form.Label column sm={4}>
                Password
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formBasicquatity">
              <Form.Label column sm={4}>
                Re-Password
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="password"
                  placeholder="Re-Password"
                  isInvalid={this.state.passwordValid}
                  value={this.state.rePassword}
                  onChange={(e) => {
                    this.setState({ rePassword: e.target.value });
                  }}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formBasicEmail">
              <Form.Label column sm={4}>
                Distributor Name
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="text"
                  placeholder="Distributor Name"
                  value={this.state.distributorName}
                  onChange={(e) =>
                    this.setState({ distributorName: e.target.value })
                  }
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formBasicEmail">
              <Form.Label column sm={4}>
                Address
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  value={this.state.address}
                  onChange={(e) => this.setState({ address: e.target.value })}
                />
              </Col>
            </Form.Group>

            <center>
              <Button
                variant="light"
                style={{ marginLeft: ".3rem" }}
                onClick={() => {
                  this.props.toRegister();
                }}
              >
                <u>Already a user SignIn</u>
              </Button>
              <Button type="submit">Register</Button>
            </center>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isRegister: state.register
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toRegister: () => {
      dispatch(register());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
