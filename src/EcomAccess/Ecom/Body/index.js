import React, { useEffect } from "react";
import BodyList from "./BodyList";
import BodyTitle from "./BodyTitle";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../../redux/actions/products";

const Body = () => {
  const darkMode = useSelector((state) => state.dark.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  });

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container pt-5">
        <BodyTitle />
        <BodyList />
      </div>
    </div>
  );
};

export default Body;
