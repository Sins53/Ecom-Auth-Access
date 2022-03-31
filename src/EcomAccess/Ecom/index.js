import React from "react";
import EcomNavbar from "./EcomNavbar";
import Footer from "./Footer";

import { useSelector } from "react-redux";
import Slider from "./Slider";

const Ecom = () => {
  const darkMode = useSelector((state) => state.dark.darkMode);

  return (
    <>
      <EcomNavbar />

      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <Slider />
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
};

export default Ecom;
