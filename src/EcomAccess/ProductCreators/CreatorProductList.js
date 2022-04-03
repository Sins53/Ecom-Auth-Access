import React from "react";
import { useSelector } from "react-redux";
import CreatorListCard from "../../Components/CreatorProduct/CreatorListCard";

const CreatorProductList = () => {
  const isLoading = useSelector((state) => state.creatorProduct.isLoading);

  return (
    <>
      {isLoading ? (
        <h1>Loading..... </h1>
      ) : (
        <CreatorListCard url={"productcreator"} />
      )}
    </>
  );
};

export default CreatorProductList;
