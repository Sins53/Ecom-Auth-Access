import React, { useEffect } from "react";
import EcomNavbar from "../Ecom/EcomNavbar";
import { fetchCreatorProduct } from "../../redux/actions/creatorProducts";
import { useDispatch, useSelector } from "react-redux";
import CreatorProductList from "./CreatorProductList";
import useNote from "../../CustomHooks/useNote";

const ProductCreators = () => {
  const darkMode = useSelector((state) => state.dark.darkMode);
  const dispatch = useDispatch();

  const { displayNotice } = useNote(
    "These items are recently added by the Creators & can only be viewed for now.."
  );

  useEffect(() => {
    dispatch(fetchCreatorProduct());
  });
  return (
    <>
      <EcomNavbar />
      {displayNotice}
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="container pt-5">
          <CreatorProductList />
        </div>
      </div>
    </>
  );
};

export default ProductCreators;
