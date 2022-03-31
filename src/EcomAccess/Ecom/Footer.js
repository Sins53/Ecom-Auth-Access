import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-2">
            <h3>Ecom</h3>
          </div>
          <div className="col-2">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Products</li>
              <li>Newsroom</li>
            </ul>
          </div>
          <div className="col-2">
            <ul>
              <li>Blog</li>
              <li>Privacy</li>
              <li>FAQ's</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-3">
            <ul>
              <li>Terms of Services</li>
              <li>Shipping Policy</li>
              <li>Return Policy</li>
            </ul>
          </div>
          <div className="col-3 ">
            <ul>
              <li>
                <i className="bi bi-geo-alt-fill"></i> Thulo Bharyang, Swoyambhu
              </li>
              <li>
                <i className="bi bi-envelope-fill"></i> swoyambhussm@gmail.com
              </li>
              <li>
                <i className="bi bi-telephone-fill"></i> 977-9851233828
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            Copyright ©2022 Payment Nepal. All rights reserved.
          </div>
          <div className="col-6 text-end">Terms & Conditions</div>
        </div>
      </div>
      <br /> <br /> <br />
    </>
  );
};

export default Footer;
