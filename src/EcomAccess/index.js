import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EcomAccess = () => {
  const userName = localStorage.getItem("name");
  const [name, setName] = useState("Customer");
  const navigate = useNavigate();

  var text = "";
  if (userName) {
    text = userName.toLowerCase();
  }

  useEffect(() => {
    if (text.includes("admin")) {
      setName("Admin");
    } else if (text.includes("creator")) {
      setName("Product Creator");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    window.location.reload();
  };
  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <section className="Home">
        <div className="box">
          <div className="text-center">
            {userName ? (
              <>
                <p className="text-success">You are logged in as {name}</p>
                <div className="text-end">
                  <button className="btn btn-danger mb-3" onClick={logout}>
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="text-danger">You are not Logged in!</p>
                <div className="text-end">
                  <button className="btn btn-primary mb-3" onClick={goToLogin}>
                    Login
                  </button>
                </div>
              </>
            )}
            <h2 className="text-success">Navigating Options</h2>
          </div>
          <br />
          <Link style={{ textDecoration: "none" }} to="/home/">
            <h3>Go to the Home page</h3>
          </Link>
          <br />
          <Link style={{ textDecoration: "none" }} to="/creator/">
            <h3>Go to the Creator page</h3>
          </Link>
          <br />
          <Link style={{ textDecoration: "none" }} to="/admin/">
            <h3>Go to the Admin page</h3>
          </Link>
          <div className="mt-4">
            <h2 className="text-success text-center">User guide</h2>
          </div>
          <Link style={{ textDecoration: "none" }} to="/guide/">
            <h3>How to Use</h3>
          </Link>
        </div>
      </section>
    </>
  );
};

export default EcomAccess;
