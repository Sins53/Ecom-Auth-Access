import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Headder = () => {
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
                    <Nav.Link>
                      <Link to={"/"}>Lobby</Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to={"/admin"}>Admin Page</Link>
                    </Nav.Link>
                    <NavDropdown
                      title="User Settings"
                      id="offcanvasNavbarDropdown"
                    >
                      <NavDropdown.Item>
                        <Link to={"/admin/user"}>Create User </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to={"/admin/roles"}>Role Setting</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item>
                        <Link to={"/pageNotFound"}>404 Page</Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default Headder;
