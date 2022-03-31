import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";

const EcomNavbar = () => {
  const userName = localStorage.getItem("name");

  return (
    <>
      <div className="Ecom">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          sticky="top"
        >
          <Container>
            <Navbar.Brand href="/home">Swoyambhu Super Market</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Lobby</Nav.Link>
                <Nav.Link href="/shop">Shop</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="/memes">
                  Dank memes
                </Nav.Link>
                {userName ? (
                  <NavDropdown title={userName} id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.2">
                      somethig
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Change Password
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/404 Error">
                      404 Page
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <button className="btn ">Logout</button>
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <NavDropdown title="User" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                    <NavDropdown.Item href="/login">Sign Up</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/404 Error">
                      404 Page
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default EcomNavbar;
