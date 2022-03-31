import React from "react";
import EcomNavbar from "./EcomNavbar";
import Footer from "./Main/Footer";
import { useSelector } from "react-redux";
import Slider from "./Main/Slider";
import Promotions from "./Main/Promotions";

const Ecom = () => {
  const darkMode = useSelector((state) => state.dark.darkMode);

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
