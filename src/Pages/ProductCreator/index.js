import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { fetchCreatorProduct } from "../../redux/actions/creatorProducts";
import ProductCreatorNavbar from "./ProductCreatorNavbar";
import Sidebar from "./Sidebar";

const ProductCreator = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCreatorProduct());
  });

  return (
    <>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div
          style={{
            flex: "1 1 auto",
            display: "flex",
            flexFlow: "column",
            height: "100vh",
            overflowY: "hidden",
          }}
        >
          <ProductCreatorNavbar />
          <div className="container mt-5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCreator;
