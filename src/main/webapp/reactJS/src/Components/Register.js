import { Component } from "react";
import { Form, Button, Card, Row, Col, DropdownButton, Dropdown  } from "react-bootstrap";
import { connect } from "react-redux";
import { register } from "../action";
import axios from 'axios';
import UserService from './UserService';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      distributorName: "",
      rePassword: "",
      address: "",
      email:"",
      phone:"",
      passwordValid: false,
      dist:[]
    };
  }
  componentDidMount(){
    UserService.getDist().then((response) => {
        console.log(response.data);
        this.setState({ dist: response.data.data})
        
    });
  }
  setDist=(dis)=>{
    this.setState({
      distributorName: dis
    })
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
      email:data.email,
      phone:data.phone,
    };
    axios.post("http://localhost:8080/register", payload)
        .then(response => {
        if(response.data===true){
          //alert("user data sent");
          console.log(response.data);

          //this.setState({ auth: response.data.auth, token:response.data.data });
        }else{
          alert(`${response.data.data}`)
          console.log(response.data);
        }
      });
  };
  render() {
    const distList = this.state.dist.map((dis) => {
      return (
        <Dropdown.Item as="button" onClick={()=>{this.setDist(dis.userName)}}>{dis.userName}</Dropdown.Item>
      );
    });
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
            <Form.Group as={Row} controlId="userName">
              <Form.Label column sm={4}>
                User Name
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  required
                  type="text"
                  placeholder="User Name"
                  value={this.state.username}
                  onChange={(e) => this.setState({ username: e.target.value })}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="password">
              <Form.Label column sm={4}>
                Password
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="repassword">
              <Form.Label column sm={4}>
                Re-Password
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  required
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
            <Form.Group as={Row} controlId="distName">
              <Form.Label column sm={4}>
                Distributor Name
              </Form.Label>
              <Col sm={5}>
              <DropdownButton id="dropdown-item-button" title={this.state.distributorName!==""?this.state.distributorName:"Select Distributer"}>
                {distList}
              </DropdownButton>
                {/* <Form.Control
                  required
                  type="text"
                  placeholder="Distributor Name"
                  value={this.state.distributorName}
                  onChange={(e) =>
                    this.setState({ distributorName: e.target.value })
                  }
                /> */}
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="address">
              <Form.Label column sm={4}>
                Address
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  required
                  type="text"
                  placeholder="Address"
                  value={this.state.address}
                  onChange={(e) => this.setState({ address: e.target.value })}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="email">
              <Form.Label column sm={4}>
                Email
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="phone">
              <Form.Label column sm={4}>
                Phone
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  required
                  type="tel"
                  placeholder="Phone"
                  value={this.state.phone}
                  onChange={(e) => this.setState({ phone: e.target.value })}
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
