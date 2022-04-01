import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { increment, decrement } from "../redux/actions/adder";
import { GrSubtractCircle, GrAddCircle } from "react-icons/gr";
import {
  cartAdderDecrease,
  cartAdderIncrease,
  removeItem,
} from "../redux/actions/cart";

const Adder = (props) => {
  const { id, stock, ordered } = props;

  const orderValue = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const decreaseOrder = () => {
    if (orderValue[id] > 1) {
      dispatch(decrement(id));
      if (ordered) {
        dispatch(cartAdderDecrease(id));
      }
    } else {
      if (ordered) {
        dispatch(removeItem(id));
      }
    }
  };
  const increaseOrder = () => {
    if (orderValue[id] < stock) {
      dispatch(increment(id));
      if (ordered) {
        dispatch(cartAdderIncrease(id));
      }
    }
  };

  return (
    <div className="AdderCart">
      <button onClick={decreaseOrder}>
        <GrSubtractCircle />{" "}
      </button>
      <input
        className="text-center"
        type={"number"}
        value={orderValue[id]}
        disabled
      />
      <button onClick={increaseOrder}>
        <GrAddCircle />{" "}
      </button>
    </div>
  );
};

export default Adder;
