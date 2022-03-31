import React from "react";
import { Link, Outlet } from "react-router-dom";

const Check = () => {
  return (
    <>
      <section>
        <p>You are logged in!</p>
        <br />
        <h2>Navigating Options</h2>
        <br />
        <Link to="/creator/">Go to the Creator page</Link>
        <br />
        <Link to="/admin/">Go to the Admin page</Link>
        <br />
        <Link to="/common/">Go to the Common page</Link>
        <br />
        <Link to="/home/">Go to the home page</Link>
      </section>
    </>
  );
};

export default Check;
