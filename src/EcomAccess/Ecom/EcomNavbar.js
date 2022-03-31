import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const EcomNavbar = () => {
  const userName = localStorage.getItem("name");
  const [darkMode, setDarkMode] = useState(false);

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
                      something
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
            <div className="container col-auto">
              <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
              <div className="switch-checkbox">
                <label className="switch">
                  <input
                    type="checkbox"
                    onChange={() => setDarkMode(!darkMode)}
                  />
                  <span className="slider round"> </span>
                </label>
              </div>
              <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
            </div>
          </Container>
        </Navbar>
      </div>

      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div>
          <h1>Cool its {darkMode ? "Dark" : "Light"} Mode </h1>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default EcomNavbar;
