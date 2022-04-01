import React, { useEffect } from "react";
import EcomNavbar from "./EcomNavbar";
import Footer from "./Main/Footer";
import { useDispatch, useSelector } from "react-redux";
import Slider from "./Main/Slider";
import Promotions from "./Main/Promotions";
import { fetchProduct } from "../../redux/actions/products";

const Ecom = () => {
  const darkMode = useSelector((state) => state.dark.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  });

  return (
    <>
      <EcomNavbar />

      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <Slider />
        <br />
        <br />
        <Promotions darkMode={darkMode} />
        <Footer />
      </div>
    </>
  );
};

export default Ecom;
