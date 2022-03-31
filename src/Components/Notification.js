import React, { useEffect, useState } from "react";

const Notification = () => {
  const LoggedInAs = localStorage.getItem("name");
  const [name, setName] = useState("Customer");

  useEffect(() => {
    if (LoggedInAs === "admin") {
      setName("Admin");
    } else if (LoggedInAs === "Product Creator") {
      setName("ProductCreator");
    }
  }, []);

  return (
    <>
      <h3 className="text-danger text-center bg-dark m-0">
        You are Logged in as: {name}
      </h3>
    </>
  );
};

export default Notification;
