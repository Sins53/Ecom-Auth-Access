import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Navbar
        bg="primary"
        variant="dark"
        sticky="top"
        expand={false}
        style={{ padding: "1rem 2rem" }}
      >
        <Container fluid>
          <Navbar.Brand>
            <h2 className="Navbar-header">Ecom Access</h2>
          </Navbar.Brand>
          {1 + 3 === 2 ? null : (
            <>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
              >
                <Offcanvas.Header className="bg-primary" closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel">
                    <h3 className="text-danger">ADMIN SETTINGS</h3>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="bg-info">
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link>Home</Nav.Link>
                    <NavDropdown
                      title="User Settings"
                      id="offcanvasNavbarDropdown"
                    >
                      <NavDropdown.Item>
                        <Link to={"/user"}>Create User </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to={"/roles"}>Role Setting</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item>Something else here</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </>
          )}
        </Container>
      </Navbar>

      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Main;
