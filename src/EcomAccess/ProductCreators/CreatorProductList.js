import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const CreatorProductList = () => {
  const isLoading = useSelector((state) => state.creatorProduct.isLoading);
  const abcd = useSelector((state) => state);

  useEffect(() => {
    console.log(isLoading);
    console.log(abcd);
  }, [isLoading]);

  return (
    <>
      <div></div>
      {isLoading ? <h1>Loading..... </h1> : <h2>Loaded</h2>}
    </>
  );
};

export default CreatorProductList;
