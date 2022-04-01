import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EcomNavbar from "../EcomNavbar";

import CheckoutCart from "./CheckoutCart";
import CheckoutForm from "./CheckoutForm";
import CheckoutOrders from "./CheckoutOrders";
import CheckoutSuccess from "./CheckoutSuccess";

var a = "dark";
var b = "light";
const Checkout = () => {
  // const [formSubmit, setFormSubmit] = useState(true);

  const cart = useSelector((state) => state.cart.cart);
  const darkMode = useSelector((state) => state.dark.darkMode);
  const navigate = useNavigate();

  if (darkMode) {
    a = "light";
    b = "dark";
  } else {
    a = "dark";
    b = "light";
  }

  useEffect(() => {
    // console.log(cart);
    if (cart.length === 0) {
      alert("You Just Cleared the Cart");
      navigate("/store");
    }
  }, [cart]);

  return (
    <>
      <EcomNavbar />
      <div className={darkMode ? "dark-mode Checkout" : "light-mode Checkout"}>
        <h1 className="text-success text-center pt-4">Checkout</h1>
        <div className="container">
          <div className="row  mt-4 justify-content-between">
            <div className={`Checkout-Form p-4 bg-${b} col-6 text-${a}`}>
              <h4>Your Details</h4>
            </div>
            <div className={`Checkout-Order p-4 bg-${b} col-5 text-${a}`}>
              <div className="row ">
                <div className="col">
                  <h4>Your Orders</h4>
                </div>
                <div className="col text-end">
                  <h4
                    className="text-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#cartModal"
                  >
                    Edit
                  </h4>
                </div>
              </div>
              <div className="mt-4">
                <CheckoutOrders />
              </div>
            </div>
          </div>
        </div>
        {/* {formSubmit ? ( 
          <>
            <h2 className="text-success text-center pt-4">Checkout</h2>
            <div className="container Checkout">
              <div className="row justify-content-between">
                <div className="col-7 Checkout-detail">
                  <CheckoutCart />
                </div>
                <div className="col-4 Checkout-cart">
                  <CheckoutForm setFormSubmit={setFormSubmit} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <CheckoutSuccess />
        )} */}
      </div>
    </>
  );
};

export default Checkout;
