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
                  <button
                    className="btn mb-3 fun"
                    data-bs-toggle="modal"
                    data-bs-target="#LogoutModal"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="text-danger">You are not Logged in!</p>
                <div className="text-end">
                  <button className="btn mb-3 fun" onClick={goToLogin}>
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

      <div
        className="modal fade LogoutModal"
        id="LogoutModal"
        tabindex="-1"
        aria-labelledby="LogoutModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="DelModal-header">
                <h3>Logout Modal</h3>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <h3>Are you sure you want to Logout? </h3>
            </div>
            <div className="modal-footer">
              <div className="text-end LogoutModal-footer">
                <button
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Cancel
                </button>
                <button
                  className="btn btn-danger"
                  onClick={logout}
                  data-bs-dismiss="modal"
                  style={{ marginLeft: "2rem" }}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EcomAccess;
