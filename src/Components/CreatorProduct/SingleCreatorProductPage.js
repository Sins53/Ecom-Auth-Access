import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleCreatorProductPage = (props) => {
  const { id } = useParams();

  const creatorProductList = useSelector(
    (state) => state.creatorProduct.products
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    if (props.setData) {
      props.setData(arr);
    }
  }, []);

  var arr = creatorProductList.filter(checkFilter);
  function checkFilter(item) {
    if (item.id === id) {
      return item;
    }
  }

  return (
    <div>
      {arr.map((item) => {
        return (
          <>
            <div class="row justify-content-center">
              <div class="col-6">
                <img className="qwe" src={item.image} alt="" />
              </div>
              <div class="col-4">
                <div>
                  <h2 className="text-primary">{item.name}</h2>
                  <h3
                    className={`ListCard-${
                      item.quantity < 10
                        ? "danger"
                        : item.quantity < 20
                        ? "ok"
                        : "full"
                    } text-end`}
                  >
                    {"Stock left: " + item.quantity}
                  </h3>
                  <div
                    className="Creator-Single-Page-scroll"
                    style={{
                      height: "20rem",
                      paddingRight: "1rem",
                      overflow: "auto",
                    }}
                  >
                    <h3>Description : {item.description}</h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nobis possimus alias veritatis corporis quod temporibus
                      consequatur, ipsam beatae officiis consectetur explicabo,
                      repudiandae inventore quae tenetur odio doloribus earum
                      architecto rerum, sit perspiciatis commodi ut. At id quam
                      ratione vel voluptatum similique magnam voluptate libero
                      harum dolorum eaque, modi iste commodi!
                    </p>
                  </div>

                  <button
                    className="ListCard-btn mt-4 fun"
                    onClick={() => {
                      alert(
                        "Success!!! You will be Notified when the item is Available."
                      );
                    }}
                  >
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default SingleCreatorProductPage;
