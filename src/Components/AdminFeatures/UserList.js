import React, { useEffect, useRef, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { GrUserSettings } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useApi from "../../CustomHooks/useApi";
import { fetchUsers } from "../../redux/actions/user";
// import UpdateModal from "./Modals/UpdateModal";

const UserList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  const users = useSelector((state) => state.user.users);
  const { commonApi } = useApi();

  const [id, setId] = useState("");
  const aname = useRef(null);
  const aemail = useRef(null);
  const apswd = useRef(null);

  var i = 0;

  const DeleteUser = () => {
    commonApi(`user/${id}`, "DELETE");
    dispatch(fetchUsers());
  };
  const putValues = (id, name, email) => {
    setId(id);
    aname.current.value = name;
    aemail.current.value = email;
  };

  const updateUser = () => {
    var name = aname.current.value;
    var email = aemail.current.value;
    var password = apswd.current.value;

    commonApi(`user/${id}`, "PUT", { name, email, password });
    dispatch(fetchUsers());
  };

  console.log(users);
  return (
    <>
      {isLoading ? (
        <h1>Loading..... </h1>
      ) : (
        <>
          <div>
            <table class="table mt-5">
              <thead>
                <tr>
                  <th scope="col-1">S.N</th>
                  <th scope="col-4">Users</th>
                  <th scope="col-4">Descriptions</th>
                  <th scope="col-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item) => {
                  {
                    i++;
                  }
                  return (
                    <tr>
                      <th>{i}</th>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>
                        <div className="row">
                          <div className="col">
                            <i
                              data-bs-toggle="modal"
                              data-bs-target="#DeleteUser"
                              onClick={() => setId(item.id)}
                            >
                              <FaTrashAlt />
                            </i>
                          </div>
                          <div className="col">
                            <div>
                              <i
                                data-bs-toggle="modal"
                                data-bs-target="#AdminUpdateModal"
                                onClick={() =>
                                  putValues(item.id, item.name, item.email)
                                }
                              >
                                <MdModeEditOutline />
                              </i>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <>
            <div
              className="modal fade DeleteUser"
              id="DeleteUser"
              tabindex="-1"
              aria-labelledby="DeleteUserLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <div className="DelModal-header">
                      <h3>Delete User</h3>
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
                    <div className="text-end DeleteUser-footer">
                      <button
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        Cancel
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={DeleteUser}
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
          </>
          <>
            <div
              className="modal fade AdminUpdateModal"
              id="AdminUpdateModal"
              tabindex="-1"
              aria-labelledby="AdminUpdateModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <div className="AdminUpdateModal-header">
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
                      <div className="container AdminUpdateModal-body text-start">
                        <div>
                          <div className="row mt-3">
                            <div className="col-4">
                              <label>Name</label>
                            </div>
                            <div className="col-8">
                              <input
                                ref={aname}
                                type="text"
                                placeholder="Enter Name"
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
                                ref={aemail}
                                type="email"
                                placeholder="Enter Email"
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row mt-3">
                            <div className="col-4">
                              <label>Password</label>
                            </div>
                            <div className="col-8">
                              <input
                                ref={apswd}
                                type="text"
                                placeholder="Enter New Password"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <div className="text-end AdminUpdateModal-footer">
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
                        onClick={updateUser}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </>
      )}
    </>
  );
};

export default UserList;
