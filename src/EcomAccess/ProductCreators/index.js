import React, { useEffect } from "react";
import EcomNavbar from "../Ecom/EcomNavbar";
import { fetchCreatorProduct } from "../../redux/actions/creatorProducts";
import { useDispatch } from "react-redux";
import CreatorProductList from "./CreatorProductList";
import useNote from "../../CustomHooks/useNote";

const ProductCreators = () => {
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
      <CreatorProductList />
    </>
  );
};

export default ProductCreators;
