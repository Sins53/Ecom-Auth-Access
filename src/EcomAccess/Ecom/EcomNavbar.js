import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toogleTheme } from "../../redux/actions/toggleTheme";
import { MdPhoneIphone } from "react-icons/md";
import { BsShop } from "react-icons/bs";

var a = "light";
const EcomNavbar = () => {
  const userName = localStorage.getItem("name");
  const [refresh, setRefresh] = useState(false);

  const darkMode = useSelector((state) => state.dark.darkMode);

  const dispatch = useDispatch();

  if (darkMode === true) {
    a = "dark";
  } else {
    a = "light";
  }

  useEffect(() => {
    console.log(darkMode);
  }, [darkMode]);

  const toogleNav = () => {
    dispatch(toogleTheme());
  };

  const logOutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setRefresh(!refresh);
  };

  return (
    <>
      <div className="Ecom">
        <Navbar collapseOnSelect expand="lg" bg={a} variant={a}>
          <Container>
            <Navbar.Brand>
              <Link style={{ textDecoration: "none" }} to={"/home"}>
                Swoyambhu Super Market
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link style={{ textDecoration: "none" }} to={"/store"}>
                    <i>
                      <BsShop />
                    </i>
                    {"  Store"}
                  </Link>
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link>
                  <i>
                    <MdPhoneIphone />
                  </i>
                  01-4890550
                </Nav.Link>
                <Nav.Link>Cart</Nav.Link>
                {userName ? (
                  <NavDropdown title={userName} id="collasible-nav-dropdown">
                    <NavDropdown.Item>
                      <Link style={{ textDecoration: "none" }} to={"/"}>
                        Lobby
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => alert("Available on Next Upgrade")}
                    >
                      Update Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => alert("Available on Next Upgrade")}
                    >
                      Change Password
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <Link
                        style={{ textDecoration: "none" }}
                        to={"/pageNotFound"}
                      >
                        404Page
                      </Link>
                    </NavDropdown.Item>
                    <Nav.Link>
                      <button className="btn " onClick={logOutUser}>
                        Logout
                      </button>
                    </Nav.Link>
                  </NavDropdown>
                ) : (
                  <NavDropdown title="User" id="collasible-nav-dropdown">
                    <NavDropdown.Item>
                      <Link style={{ textDecoration: "none" }} to={"/login"}>
                        Login
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link style={{ textDecoration: "none" }} to={"/login"}>
                        Sign Up
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <Link
                        style={{ textDecoration: "none" }}
                        to={"/pageNotFound"}
                      >
                        404Page
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
              </Nav>
            </Navbar.Collapse>
            <div className="containerNav col-auto">
              <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
              <div className="switch-checkbox">
                <label className="switch">
                  <input type="checkbox" onChange={toogleNav} />
                  <span className="slider round"> </span>
                </label>
              </div>
              <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
            </div>
          </Container>
        </Navbar>
      </div>

      {/* <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div>
          <h1>Cool its {darkMode ? "Dark" : "Light"} Mode </h1>
          <Outlet />
        </div>
      </div> */}
    </>
  );
};

export default EcomNavbar;
