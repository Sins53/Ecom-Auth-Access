import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { fetchUsers } from "../../redux/actions/user";
import Headder from "./Headder";

const Admin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <Headder />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Admin;
