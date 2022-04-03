import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SingleCreatorProductPage from "../../../Components/CreatorProduct/SingleCreatorProductPage";
import useApi from "../../../CustomHooks/useApi";
import useNote from "../../../CustomHooks/useNote";
import { fetchCreatorProduct } from "../../../redux/actions/creatorProducts";

const SingleItemsPage = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const { commonApi } = useApi();
  const dispatch = useDispatch();

  const { displayNotice } = useNote("Minimize Sidenav for better View.");

  const [data, setData] = useState([]);

  const pname = useRef(null);
  const pdescription = useRef(null);
  const pimg = useRef(null);
  const pqty = useRef(null);

  const url = `product/${id}`;

  const setInitials = () => {
    pname.current.value = data[0].name;
    pdescription.current.value = data[0].description;
    pimg.current.value = data[0].image;
    pqty.current.value = data[0].quantity;
  };

  const updateProduct = () => {
    var name = pname.current.value;
    var description = pdescription.current.value;
    var image = pimg.current.value;
    var qty = pqty.current.value;
    var quantity = Number(qty);
    // console.log(name, description, image, quantity);

    commonApi(url, "PUT", { name, description, image, quantity });
    dispatch(fetchCreatorProduct());
  };

  const deleteProduct = () => {
    commonApi(url, "DELETE");
    dispatch(fetchCreatorProduct());
    navigate(-1);
  };

  return (
    <>
      {displayNotice}
      <div className="Creator-Body">
        <div className="container mt-5">
          <div className="text-end">
            <button
              data-bs-toggle="modal"
              data-bs-target="#CreatorUpdateModal"
              className="mr-3 btn btn-warning"
              onClick={setInitials}
            >
              Edit
            </button>
            <button
              data-bs-toggle="modal"
              data-bs-target="#DeleteProduct"
              className="btn btn-danger"
              // onClick={deleteProduct}
            >
              Delete
            </button>
          </div>
          <div className="text-white mt-3">
            <SingleCreatorProductPage setData={setData} />
          </div>
        </div>
      </div>

      <div
        className="modal fade DeleteProduct"
        id="DeleteProduct"
        tabindex="-1"
        aria-labelledby="DeleteProductLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="DelModal-header">
                <h3>Delete Modal</h3>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <h3>Are you sure you want to Delete? </h3>
            </div>
            <div className="modal-footer">
              <div className="text-end DeleteProduct-footer">
                <button
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Cancel
                </button>
                <button
                  className="btn btn-danger"
                  onClick={deleteProduct}
                  data-bs-dismiss="modal"
                  style={{ marginLeft: "2rem" }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade CreatorUpdateModal"
        id="CreatorUpdateModal"
        tabindex="-1"
        aria-labelledby="CreatorUpdateModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="CreatorUpdateModal-header">
                <h3>Add Products</h3>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="container CreatorUpdateModal-body text-start">
                  <div>
                    <div className="row mt-3">
                      <div className="col-4">
                        <label>Name</label>
                      </div>
                      <div className="col-8">
                        <input
                          ref={pname}
                          type="text"
                          placeholder="Enter Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="row mt-4">
                      <div className="col-4">
                        <label>Description</label>
                      </div>
                      <div className="col-8">
                        <input
                          ref={pdescription}
                          type="text"
                          placeholder="Enter Description"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="row mt-3">
                      <div className="col-4">
                        <label>Image Link</label>
                      </div>
                      <div className="col-8">
                        <input
                          ref={pimg}
                          type="text"
                          placeholder="Enter Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="row mt-4">
                      <div className="col-4">
                        <label>Quantity</label>
                      </div>
                      <div className="col-8">
                        <input
                          ref={pqty}
                          type="number"
                          placeholder="Enter Quantity"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <div className="text-end CreatorUpdateModal-footer">
                <button
                  className="btn btn-danger mr-4"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Close
                </button>
                <button
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  onClick={updateProduct}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleItemsPage;
