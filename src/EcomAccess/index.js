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
          <Link to="/home/">
            <h3>Go to the Home page</h3>
          </Link>
          <br />
          <Link to="/creator/">
            <h3>Go to the Creator page</h3>
          </Link>
          <br />
          <Link to="/admin/">
            <h3>Go to the Admin page</h3>
          </Link>
        </div>
      </section>
    </>
  );
};

export default EcomAccess;
