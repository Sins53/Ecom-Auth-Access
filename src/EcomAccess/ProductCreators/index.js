import React, { useEffect } from "react";
import EcomNavbar from "../Ecom/EcomNavbar";
import { fetchCreatorProduct } from "../../redux/actions/creatorProducts";
import { useDispatch } from "react-redux";
import CreatorProductList from "./CreatorProductList";

const ProductCreators = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCreatorProduct());
  });
  return (
    <>
      <EcomNavbar />
      <CreatorProductList />
    </>
  );
};

export default ProductCreators;
