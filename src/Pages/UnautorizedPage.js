import React from "react";
import { useNavigate } from "react-router-dom";

const UnautorizedPage = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  return (
    <>
      <section className="container text-center mt-5">
        <h1 className="text-danger">Unauthorized</h1>
        <br />
        <p>You do not have access to the requested page.</p>
        <div className="flexGrow">
          <button className="btn btn-danger" onClick={goBack}>
            Go Back
          </button>
        </div>
      </section>
    </>
  );
};

export default UnautorizedPage;
