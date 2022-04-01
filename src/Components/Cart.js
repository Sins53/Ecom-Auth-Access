import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillCloseCircle } from "react-icons/ai";
import { removeItem } from "../redux/actions/cart";
import Adder from "./Adder";
import { resetOrder } from "../redux/actions/adder";

var stockName = "";
const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const imgUrl = "https://electronic-ecommerce.herokuapp.com/";

  const removeCart = (id) => {
    dispatch(removeItem(id));
    dispatch(resetOrder(id));
  };

  return (
    <>
      {cart.map((item) => {
        {
          item.ordered <= 0
            ? removeCart(item.id)
            : item.stock < 5
            ? (stockName = "danger")
            : item.stock < 10
            ? (stockName = "ok")
            : (stockName = "full");
        }
        return (
          <>
            <div className="row mt-2" key={item.name}>
              <div className="col-auto">
                <button
                  className="btn btn-danger mt-3"
                  onClick={() => removeCart(item.id)}
                >
                  <AiFillCloseCircle />
                </button>
              </div>
              <div className="col-auto">
                <img className="Cart-img" src={imgUrl + item.image} alt="" />
              </div>
              <div className="col-auto">
                <h6>{item.name}</h6>
                <h6>{"Rs. " + item.r * item.ordered}</h6>
              </div>
              <div className="col-auto ml-auto text-end">
                <h6 className={`ListCard-${stockName}`}>
                  {"Stock remaining: " + item.stock}
                </h6>
                <Adder id={item.id} stock={item.stock} ordered={item.ordered} />
                <>Per Rs: {item.r}</>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Cart;
