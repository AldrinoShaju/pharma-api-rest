import { Component } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Contact from "./Contact";
import Home from "./Home";
import About from "./About";
import Login from "./Login";



class Header extends Component {
  render() {
    return (
      <Router>
        <Navbar className="navStyle" expand="lg">
          {/* <Navbar.Brand>Pharma Store</Navbar.Brand> */}
          <Navbar.Brand href="/">
            <img
              src="https://image.shutterstock.com/image-vector/logo-health-care-clinic-cross-600w-338808005.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Pharma Store Logo"
            />
            {'  '}Pharma Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{margin:'auto'}}>
              <Nav.Link as={Link} to="/" className="navlink">
                <strong>Home</strong>
              </Nav.Link>
              <Nav.Link as={Link} to="/admin" className="navlink">
              <strong>Administrator</strong>
              </Nav.Link>
              <Nav.Link as={Link} to="/dist" className="navlink">
              <strong>Distributer</strong>
              </Nav.Link>
              <Nav.Link as={Link} to="/cust" className="navlink">
              <strong>Customer</strong>
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="navlink">
              <strong>About Us</strong>
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="navlink">
              <strong>Contact Us</strong>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* <Image
          // src="https://okcredit-blog-images-prod.storage.googleapis.com/2020/12/pharmacy5.jpg"
          src="https://indiaincgroup.com/wp-content/uploads/2020/07/Sun-Pharma-acquires-Canada%E2%80%99s-Aquinox-Pharmaceuticals-for-8.2mn.jpg"
          fluid
          style={{ width: "100%", height: "50vh" }}
        ></Image> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route
            exact
            path="/admin"
            render={() => <Login authType="Administrator" />}
          />
          <Route
            exact
            path="/dist"
            render={() => <Login authType="Distributor" />}
          />
          <Route
            exact
            path="/cust"
            render={() => <Login authType="Customer" />}
          />
        </Switch>
      </Router>
    );
  }
}
export default Header;