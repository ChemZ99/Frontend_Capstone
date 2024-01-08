import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbardef() {
  const navigate = useNavigate();
  return (
    <Navbar expand="sm" className="bg-body-primary">
      <Container>
        <Navbar.Brand>Search-Engine</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="">
              Home
            </Link>
            <Nav.Link>Profile</Nav.Link>
            <Link className="nav-link" to="/register">
              Register
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <NavDropdown title="Links" id="basic-nav-dropdown">
              <NavDropdown.Item>Tripadvisor</NavDropdown.Item>
              <NavDropdown.Item>Booking</NavDropdown.Item>
              <NavDropdown.Item>Ryanair</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbardef;
