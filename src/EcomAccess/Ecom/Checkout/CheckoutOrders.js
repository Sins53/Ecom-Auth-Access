import React, { PureComponent } from "react";
import { useSelector } from "react-redux";
import useToWords from "../../../CustomHooks/useToWords";

const CheckoutOrders = () => {
  const cart = useSelector((state) => state.cart.cart);
  const imgUrl = "https://electronic-ecommerce.herokuapp.com/";

  const { toWords } = useToWords();

  if (cart !== []) {
    var total = 0;
    var uniqueItems = 0;
    cart.forEach((item) => {
      uniqueItems += item.ordered;
      total = total + item.r * item.ordered;
    });
    var inWords = toWords(total);
    console.log(inWords);
  }

  return (
    <>
      <div className="mb-3 mt-4 Checkout-Order-start">
        <h5>Ordered Summary</h5>
      </div>

      <div className="Checkout-Order-order">
        {cart.map((item) => {
          return (
            <h5>
              <img className="Cart-img" src={imgUrl + item.image} alt="" />
              <span className="ml-3" style={{ fontSize: "1.2rem" }}>
                {item.name} * Rs. {item.r} *
                <span className="text-primary" style={{ fontSize: "1.2rem" }}>
                  {item.ordered}
                  {item.ordered === 1 ? "pc." : "pcs."}
                </span>
              </span>
            </h5>
          );
        })}
      </div>
      <div className="text-end mt-3 Checkout-Order-end">
        <h5>Unique Items : {uniqueItems}</h5>
        <h5>Subtotal: {total}</h5>
      </div>
      <div className="mt-3 Checkout-Order-delivery">
        <h4>Delivery </h4>
        <h5>
          Currently on promotion So, no
          <span className="text-primary">
            <h5 style={{ display: "inline" }}> Extra Fee </h5>
          </span>
          Needed
        </h5>
        <div className="row text-primary">
          <div className="col-11">No Fee</div>
          <div className="col-1">0</div>
        </div>
      </div>
      <div className="text-end mt-3 Checkout-Order-end">
        <h5>Total: {total}</h5>
        <h6 className="text-start"> {inWords}</h6>
      </div>
    </>
  );
};

export default CheckoutOrders;
