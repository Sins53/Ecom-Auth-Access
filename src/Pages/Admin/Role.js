import React from "react";

const Role = () => {
  return (
    <>
      <div className="container mt-5">
        <h3>Role Setup</h3>
        <div className="ml-5 mt-5">
          <h4>Currently The Project only has a Creator role.</h4>
          <h4>The Creator can EDIT / UPDATE / DELETE A Product</h4>
          <h4>
            To assign a normal user as creator update user name containing word
            creator eg: user-creator / ###(creator)
          </h4>
        </div>
      </div>
    </>
  );
};

export default Role;
