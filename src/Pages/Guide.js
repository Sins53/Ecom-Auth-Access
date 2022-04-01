import React from "react";
import { useNavigate } from "react-router-dom";

const Guide = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const goHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="container">
        <div className=" mt-5 text-end">
          <button className="btn btn-primary" onClick={goHome}>
            Go Home
          </button>
          <button className="ml-4 btn btn-info" onClick={goBack}>
            Go Back
          </button>
        </div>
        <div className="mt-5">
          <h2>User Guide</h2>
        </div>
      </div>
    </>
  );
};

export default Guide;
