import React, { useRef, useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import { useDispatch } from "react-redux";
import useApi from "../../CustomHooks/useApi";
import { fetchUsers } from "../../redux/actions/user";

const AdminAddModal = () => {
  const { commonApi } = useApi();
  const dispatch = useDispatch();
  const aname = useRef(null);
  const adescription = useRef(null);
  const apswd = useRef(null);

  const submitUser = () => {
    var name = aname.current.value;
    var email = adescription.current.value;
    var password = apswd.current.value;
    commonApi("user", "POST", { name, email, password });
    // postData(props.url, { name, email, password });
    // dispatch(dataAdded());
    // console.log(name, email, password);
    aname.current.value = "";
    adescription.current.value = "";
    apswd.current.value = "";

    dispatch(fetchUsers());
  };

  return (
    <>
      <button
        className="btn btn-primary fun"
        data-bs-toggle="modal"
        data-bs-target="#AddModal"
      >
        <i>
          <AiOutlinePlus />
        </i>
        Add User
      </button>

      <div
        className="modal fade AddModal"
        id="AddModal"
        tabindex="-1"
        aria-labelledby="AddModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="AddModal-header">
                <h3>Add User</h3>
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
                <div className="container AddModal-body text-start">
                  <>
                    <div>
                      <div className="row mt-3">
                        <div className="col-4">
                          <label>Full Name</label>
                        </div>
                        <div className="col-8">
                          <input
                            ref={aname}
                            type="text"
                            placeholder="Enter Full Name"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="row mt-4">
                        <div className="col-4">
                          <label>Email</label>
                        </div>
                        <div className="col-8">
                          <input
                            ref={adescription}
                            type="email"
                            placeholder="Enter Email"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="row mt-4">
                        <div className="col-4">
                          <label>Password</label>
                        </div>
                        <div className="col-8">
                          <input
                            ref={apswd}
                            type="text"
                            placeholder="Enter Password"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <div className="text-end AddModal-footer">
                <button
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={submitUser}
                >
                  Add User
                </button>
                <button
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminAddModal;
