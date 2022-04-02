import React from "react";
import { useSelector } from "react-redux";
import useNote from "../CustomHooks/useNote";

const CreatorListCard = () => {
  const creatorProductList = useSelector(
    (state) => state.creatorProduct.products
  );
  const { displayNotice } = useNote(
    "If Description Exceeds 3 lines scroll is added."
  );

  console.log(creatorProductList);

  return (
    <>
      <>
        <div className="row Creator-Products">
          {displayNotice}
          {creatorProductList.map((item) => {
            return (
              <div className="col-lg-3 Body-list-card" key={item.id}>
                <div className="ListCard" id={item.id}>
                  <div>
                    {/* <Link to={`/product/${item.id}`}> */}
                    <div>
                      <img className="ListCard-image" src={item.image} alt="" />
                    </div>
                    {/* </Link> */}
                    <div className=" ListCard-title">
                      <h4>{item.name}</h4>
                    </div>
                    <div className="mt-3">
                      <h5
                        className={`ListCard-${
                          item.quantity < 10
                            ? "danger"
                            : item.quantity < 20
                            ? "ok"
                            : "full"
                        } text-end`}
                      >
                        {"Stock left: " + item.quantity}
                      </h5>
                    </div>
                    <div className="ListCard-description">
                      <h5>{item.description}</h5>
                    </div>
                    <div>
                      <button className="mt-3 ListCard-btn">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    </>
  );
};

export default CreatorListCard;
