import React from "react";

const Extra = () => {
  return (
    <>
      <div className="title">
        <span className="text">Login via...</span>
      </div>
      <div className="btn-set">
        <button className="api google" disabled={true}>
          Google
        </button>
        <button className="api facebook" disabled={true}>
          Facebook
        </button>
      </div>
    </>
  );
};

export default Extra;
