import React from "react";
import { useSelector } from "react-redux";
import AdminAddModal from "../../Components/AdminFeatures/AdminAddModal";
import UserList from "../../Components/AdminFeatures/UserList";

const User = () => {
  const isLoading = useSelector((state) => state.user.isLoading);
  return (
    <>
      {isLoading ? (
        <h1>Loading..... </h1>
      ) : (
        <>
          <div className="container mt-5">
            <div>
              <h2>User Setup</h2>
            </div>
            <div className="text-end">
              <AdminAddModal />
            </div>
            <UserList />
          </div>
        </>
      )}
    </>
  );
};

export default User;
