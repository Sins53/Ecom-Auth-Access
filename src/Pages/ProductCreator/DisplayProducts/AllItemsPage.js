import React from "react";
import { useSelector } from "react-redux";
import CreatorListCard from "../../../Components/CreatorProduct/CreatorListCard";
import AddModal from "../../../Components/CreatorProduct/Modals/AddModal";
import useNote from "../../../CustomHooks/useNote";

const AllItemsPage = () => {
  const isLoading = useSelector((state) => state.creatorProduct.isLoading);
  const { displayNotice } = useNote(
    "Click on product image or view more to Edit/Delete the product.."
  );

  return (
    <>
      {displayNotice}
      <div className="Creator-Body">
        <div className="container mt-5">
          <div className="text-end">
            <AddModal />
          </div>
          <div
            className="mt-5 pr-4 Product-Display"
            style={{
              maxHeight: "32rem",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            {isLoading ? (
              <h1>Loading..... </h1>
            ) : (
              <>
                <CreatorListCard url={"creator/products"} />
                <br />
                <br />
                <br />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllItemsPage;
