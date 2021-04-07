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
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>Pharma Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{margin:'auto'}}>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/admin">
                Administrator
              </Nav.Link>
              <Nav.Link as={Link} to="/dist">
                Distributor
              </Nav.Link>
              <Nav.Link as={Link} to="/cust">
                Customer
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Image
          // src="https://okcredit-blog-images-prod.storage.googleapis.com/2020/12/pharmacy5.jpg"
          src="https://indiaincgroup.com/wp-content/uploads/2020/07/Sun-Pharma-acquires-Canada%E2%80%99s-Aquinox-Pharmaceuticals-for-8.2mn.jpg"
          fluid
          style={{ width: "100%", height: "50vh" }}
        ></Image>
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
