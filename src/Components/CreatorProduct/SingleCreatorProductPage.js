import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleCreatorProductPage = () => {
  const { id } = useParams();

  const creatorProductList = useSelector(
    (state) => state.creatorProduct.products
  );

  useEffect(() => {
    window.scrollTo(0, 0);
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
                  <h3>Description : {item.description}</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                    excepturi odio deserunt laboriosam? Numquam, veniam. Dolore
                    neque obcaecati similique a, velit sequi? Doloremque,
                    temporibus eveniet nesciunt consequuntur blanditiis minima
                    quisquam beatae incidunt nihil! Dolorem error tenetur ea
                    fuga non illo quibusdam? Ratione ipsa hic, eos perspiciatis
                    sequi, velit sapiente delectus vero rem labore maiores
                    quibusdam beatae consequatur esse commodi quod quia eaque
                    culpa magnam ab at porro. Quos excepturi impedit et eveniet
                    officia, sint soluta qui. Ratione blanditiis earum illum
                    laudantium fuga molestiae dolor unde reiciendis quae quod
                    officiis vel ex ipsam repellat.
                  </p>

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
