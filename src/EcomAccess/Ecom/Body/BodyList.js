import React from "react";
import { useSelector } from "react-redux";
import ListCard from "../../../Components/ListCard";

const BodyList = () => {
  const isLoading = useSelector((state) => state.product.isLoading);

  return <>{isLoading ? <h1>Loading..... </h1> : <ListCard />}</>;
};

export default BodyList;
