import React from "react";
import { useSelector } from "react-redux";
import SingleCreatorProductPage from "../../Components/CreatorProduct/SingleCreatorProductPage";
import EcomNavbar from "../Ecom/EcomNavbar";

const SingleProduct = () => {
  const darkMode = useSelector((state) => state.dark.darkMode);
  return (
    <>
      <EcomNavbar />
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="container pt-5">
          <SingleCreatorProductPage />
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
