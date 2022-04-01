import React from "react";
import { useSelector } from "react-redux";

const CheckoutOrders = () => {
  const cart = useSelector((state) => state.cart.cart);
  const imgUrl = "https://electronic-ecommerce.herokuapp.com/";

  if (cart !== []) {
    var total = 0;
    var uniqueItems = 0;
    cart.forEach((item) => {
      uniqueItems += item.ordered;
      total = total + item.r * item.ordered;
    });
  }

  return (
    <>
      <div className="mb-3 mt-4 Checkout-Order-start">
        <h5>Ordered Summary</h5>
      </div>

      {cart.map((item) => {
        return (
          <h5>
            <img className="Cart-img" src={imgUrl + item.image} alt="" />
            {"  "} {item.name} * Rs. {item.r} * {item.ordered} pcs.
          </h5>
        );
      })}
      <div className="text-end mt-3 Checkout-Order-end">
        <h5>Unique Items : {uniqueItems}</h5>
        <h5>Subtotal: {total}</h5>
      </div>
    </>
  );
};

export default CheckoutOrders;
