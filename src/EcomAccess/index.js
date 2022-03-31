import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EcomAccess = () => {
  const userName = localStorage.getItem("name");
  const [name, setName] = useState("Customer");

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
  }, [userName]);

  return (
    <>
      <section className="Home">
        <div className="box">
          <div className="text-center">
            {userName ? (
              <p className="text-success">You are logged in as {name}</p>
            ) : (
              <p className="text-danger">You are not Logged in!</p>
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
