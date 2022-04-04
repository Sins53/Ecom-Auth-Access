import React from "react";
import { useNavigate } from "react-router-dom";

const Guide = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const goHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="container">
        <div className=" mt-5 text-end">
          <button className="btn btn-primary" onClick={goHome}>
            Go Home
          </button>
          <button className="ml-4 btn btn-info" onClick={goBack}>
            Go Back
          </button>
        </div>
        <div className="mt-5">
          <h2>User Guide</h2>
          <ul className="mt-3">
            <h3>Use This logins or create New</h3>
            <li>
              <div className="row">
                <div className="col-5">customer@customer.com</div>
                <div className="col-4">customer123</div>
              </div>
            </li>
            <li>
              <div className="row">
                <div className="col-5">creator@creator.com</div>
                <div className="col-4">creator123</div>
              </div>
            </li>
            <li>
              <div className="row">
                <div className="col-5">admin@admin.com</div>
                <div className="col-4">admin123</div>
              </div>
            </li>
            <br />
            <h3>Normal User</h3>
            <li>Can signup/ login</li>
            <li>Can use ecom site to Add Filter & Checkout</li>
            <br />
            <h3>Product Creator</h3>
            <li>
              To get product creator privellage the user name must contain the
              word creator
            </li>
            <li>
              Can be assigned by admin later by changing name or using a name
              containing creator during signup
            </li>
            <li>
              Has Access to Creator page. Where they can create/update/delete
              Creator Products.
            </li>
            <br />
            <h3>Admin</h3>
            <li>Can access Admin page</li>
            <li>Can give creator privellege to users</li>
            <li>Can Update/Delete/Add Users.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Guide;
